import classes from "./question-item.module.scss";

function QuestionItem(props) {
  const { content } = props;

  return (
    <div className={classes.qAndA}>
      <div className={classes.content}>
        <h4>Question : </h4>
        <p>{content.question}</p>
      </div>
      <div className={classes.content}>
        <h4>Reply : </h4>
        <p>{content.reply || "...waiting for reply"}</p>
      </div>
    </div>
  );
}

export default QuestionItem;
