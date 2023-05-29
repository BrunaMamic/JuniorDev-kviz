import "./CorrectAns.css";

const CorrectAns = (props: any) => {
  const { title } = props;
  return (
      <div className="corrAns">
        <div>{title}</div>
        {/* {props.howManyCorrect()}/{props.noQuestions} */}
        <div>
          {props.howManyCorrect()}/{props.questions}
        </div>
      </div>
  );
}

export default CorrectAns;
