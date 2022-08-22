import { async } from "@firebase/util";
import {
  arrayRemove,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "./clientApp";

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
