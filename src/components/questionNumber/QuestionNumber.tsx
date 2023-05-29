import './QuestionNumber.css'

const QuestionNumber = (props: any) => {  
  return (
    <div className="question-counter">
      Question:
      <br /> {props.noQuestions+1}/{props.totalQuestions.length}
    </div>
  );
};

export default QuestionNumber;
