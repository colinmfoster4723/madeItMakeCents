import { uploadPost } from "../../firebase/firebase-util";
import { useRef } from "react";
function CreatePost() {
  const titleInput = useRef();
  const textInput = useRef();
  const imgInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const title = titleInput.current.value;
    const text = textInput.current.value;
    const img = imgInput.current.files[0];

    if (!title || title.trim() === "" || !text || text.trim() === "" || !img)
      return;

    uploadPost(title, text, img);
    props.refresh();
  }

  return (
    <div>
      <h2>Create a New Post!</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" ref={titleInput} />
        <input type="text" placeholder="text" ref={textInput} />
        <input type="file" accept=".png,.jpg,.jpeg" ref={imgInput} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
