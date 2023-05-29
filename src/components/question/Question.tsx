import "./Question.css";

const Question = (props: any) => {
  return (
    <div>
      <div className="question">{atob(props.questions[props.noQuestions]?.question)}</div>
    </div>
  );
}

export default Question;
