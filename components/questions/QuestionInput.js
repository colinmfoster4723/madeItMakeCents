import { useRef } from "react";
import { uploadQuestion } from "../../firebase/firebase-util";

function QuestionInput(props) {
  const questionInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const question = questionInput.current.value;

    uploadQuestion(question);
    props.refresh(question);
  }
  return (
    <div>
      <h3>Ask a Question!</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="ask a question" ref={questionInput} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default QuestionInput;
