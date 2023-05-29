import Answers from "../answers/Answers";
import CorrectAns from "../correctAns/CorrectAns";
import Question from "../question/Question";
import QuestionNumber from "../questionNumber/QuestionNumber";

const Quiz = (props: any) => {
  return (
    <div className="main">
      {props.questions.length - 1 >= props.noQuestions ? (
        <div>
          <div className="category">
            Kategorija: {atob(props.questions[props.noQuestions]?.category)}
          </div>
          <Question
            questions={props.questions}
            noQuestions={props.noQuestions}
            clickedAnswer={props.clickedAnswer}></Question>

          <Answers
            answers={props.shuffledAns}
            submitAnswer={props.submitAnswer}
            noQuestions={props.noQuestions}
            correct_answer={props.questions[props.noQuestions].correct_answer}
            clickedAnswer={props.clickedAnswer}
            questions={props.questions}
          />
          <div className="mainCorrAns">
            <CorrectAns
              howManyCorrect={props.howManyCorrect}
              questions={props.questions.length}
              noQuestions={props.noQuestions}
              answers={props.shuffledAns}
              title="Correct:"
            />
          </div>

          <QuestionNumber noQuestions={props.noQuestions} totalQuestions={props.questions} />
        </div>
      ) : (
        <>
          <div className="final">
            <span style={{fontSize: '36px'}}>Final score:</span>
            <CorrectAns
              howManyCorrect={props.howManyCorrect}
              questions={props.questions.length}
              noQuestions={props.noQuestions}
              answers={props.shuffledAns}
            />
            <button className="resetButton" onClick={() =>props. resetData()}>
              Resetiraj kviz!!
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Quiz;
