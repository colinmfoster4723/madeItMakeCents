import { async } from "@firebase/util";
import {
  arrayRemove,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, list } from "firebase/storage";
import { useState } from "react";
import { db, storage } from "./clientApp";

export async function getAllPosts() {
  const dbRef = collection(db, `posts`);
  const data = await getDocs(dbRef);
  return data.docs.map((doc) => doc.data());
}

export async function getAllQuestions() {
  const dbRef = collection(db, `questions`);
  const data = await getDocs(dbRef);
  return data.docs.map((doc) => doc.data());
}

export async function getPostData(id) {
  const dbRef = doc(db, `posts/${id}`);
  const data = await getDoc(dbRef);
  return data.data();
}

export async function getAllIds() {
  const allPosts = await getAllPosts();
  return allPosts.map((post) => post.id);
}

//USE AFTER GETTING DATA > PUSH DATA THROUGH AS PROPS
export function findFeaturedPosts(allPosts) {
  return allPosts.filter((post) => post.isFeatured);
}

//SET DATA
export async function uploadQuestion(question) {
  const allIds = (await getAllQuestions()).map((ques) => ques.id);

  const newId =
    "q" +
    String(
      allIds.map((id) => Number(id.slice(-3))).sort((a, b) => b - a)[0] + 1
    ).padStart(3, 0);

  const dbRef = doc(db, `questions`, newId);
  await setDoc(dbRef, { id: newId, question, reply: "" });
  console.log("Your Question has been Uploaded!");
}

export async function uploadPost(title, text, img) {
  const allIds = await getAllIds();

  const newId =
    "p" +
    String(
      allIds.map((id) => Number(id.slice(-3))).sort((a, b) => b - a)[0] + 1
    ).padStart(3, 0);

  //upload img to storage
  const uploadRef = ref(storage, newId);
  await uploadBytes(uploadRef, img);
  console.log("Image uploaded to Storage");

  //get url
  const url = getDownloadURL(uploadRef);

  //upload doc to database w/ img url
  const dbRef = doc(db, "posts", newId);
  setDoc(dbRef, { id: newId, title, text, url });
  console.log("Success! A new post has been added");
}

export async function updatePost(title, text, img, id) {
  let url;
  if (img) {
    const uploadRef = ref(storage, id);
    await uploadBytes(uploadRef, img);
    console.log("Image has been replaced");
    url = await getDownloadURL(uploadRef);
  }

  const updatedDoc = url ? { title, text, url } : { title, text };
  const dbRef = doc(db, "posts", id);
  setDoc(dbRef, updatedDoc, { merge: true });

  return url;
}
