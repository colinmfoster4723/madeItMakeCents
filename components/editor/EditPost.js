import classes from "./edit-post.module.scss";

import { useRef } from "react";
import { updatePost } from "../../firebase/firebase-util";
import Image from "next/image";
function EditPost(props) {
  const { title, text, url, id } = props.post;

  const titleInput = useRef();
  const textInput = useRef();
  const imgInput = useRef();

  const curImg = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const title = titleInput.current.value;
    const text = textInput.current.value;
    const img = imgInput.current.files[0];

    if (!title || title.trim() === "" || !text || text.trim() === "") return;

    const url = await updatePost(title, text, img, id);

    curImg.current.src = url;
  }

  return (
    <div className={classes.editor}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          defaultValue={title}
          ref={titleInput}
        />
        <input
          type="text"
          placeholder="text"
          defaultValue={text}
          ref={textInput}
        />
        <input type="file" accept=".png,.jpg,.jpeg" ref={imgInput} />
        <img src={url} ref={curImg} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditPost;
