import "./Answers.css";

const Answers = (props: any) => {
  const isCorrect = (correct_answer: string, answer: string) => {
    if (props.clickedAnswer) {
      if (correct_answer === answer) {
        return "tocno";
      } else {
        return "krivoo";
      }
    }
  };

  
  return (
    <div className="answersEdit">
      {!!props.answers.length &&
        props.answers?.map((x: any, index: number) => (
          <button
            key={index}
            onClick={() => {
              props.submitAnswer(x);
            }}
            className={`answers ${isCorrect(props?.correct_answer, x)}`}>
            {index + 1}. {atob(x)}
          </button>
        ))}
      
    </div>
  );
}

export default Answers;
