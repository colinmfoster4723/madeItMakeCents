import classes from "../styles/questions.module.scss";
import { getAllQuestions } from "../firebase/firebase-util";
import QuestionItem from "../components/questions/QuestionItem";
import QuestionInput from "../components/questions/QuestionInput";
import { useEffect, useState } from "react";

function QuestionsPage(props) {
  const [questions, setQuestions] = useState(props.questions);

  async function refresh(newQuestion) {
    setQuestions((prev) => [
      ...prev,
      { question: newQuestion, reply: "", id: Math.random() * 1 },
    ]);
    //set random id until real one is assigned for the key of the QuestionItem
  }
  return (
    <>
      <div className="contain">
        <QuestionInput refresh={refresh} />
        <div className={classes.list}>
          {questions &&
            questions.map((ques) => (
              <QuestionItem key={ques.id} content={ques} />
            ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allQuestions = await getAllQuestions();

  return {
    props: {
      questions: allQuestions,
    },
  };
}

export default QuestionsPage;
