import axios from "axios";
import "./App.css";

import { useEffect, useState } from "react";
import Start from "./components/start/Start";
import Quiz from "./components/quiz/Quiz";

function App() {
  const [questions, setQuestions] = useState<any>([]);
  const [noQuestions, setNoQuestions] = useState(0);
  const [answers, setAnswers] = useState<any>([]);
  const [clickedAnswer, setClickedAnswer] = useState(false);
  const [shuffledAns, setShuffledAns] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [choosenCategory, setChoosenCategory] = useState<string | null>(null);
  const [choosenDifficulty, setChoosenDifficulty] = useState<string | null>(
    null
  );

  const dohvatiOpcije = () => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res) => setCategoryOptions(res.data.trivia_categories));
  };

  useEffect(() => dohvatiOpcije(), []);

  const dohvatiPodatke = () => {
    if (!!choosenCategory && !!choosenDifficulty) {
      axios
        .get(
          `https://opentdb.com/api.php?amount=5&category=${choosenCategory}&difficulty=${choosenDifficulty}&type=multiple&encode=base64`
        )
        .then((res) => {
          setQuestions(res.data.results);
        })
        .catch((err) => alert(err));
    }
  };

  const submitAnswer = (answer: string) => {
    if (questions.length - 1 >= noQuestions) {
      setClickedAnswer(true);
      setAnswers((prevState: any) => {
        const ans = [...prevState, answer];
        return ans;
      });
      setTimeout(() => {
        setNoQuestions((prevState: number) => {
          setClickedAnswer(false);
          return (prevState = prevState + 1);
        });
      }, 1000);
    }
  };

  const howManyCorrect = () => {
    let corr = 0;
    questions.forEach((x: any) => {
      if (answers.includes(x.correct_answer)) {
        corr = corr + 1;
      }
    });
    return corr;
  };

  const resetData = () => {
    setQuestions([]);
    setNoQuestions(0);
    setAnswers([]);
    setChoosenCategory(null);
    setChoosenDifficulty(null);
  };

  useEffect(() => {
    if (!!questions.length && questions.length - 1 >= noQuestions) {
      setShuffledAns(
        shuffled([
          questions[noQuestions]?.correct_answer,
          ...questions[noQuestions]?.incorrect_answers,
        ])
      );
    }
  }, [noQuestions, questions]);

  const shuffled = (array: any) => {
    return array
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: any) => value);
  };

  return (
    <div className="App">
      {!questions.length && (
        <Start
          setChoosenCategory={setChoosenCategory}
          categoryOptions={categoryOptions}
          choosenCategory={choosenCategory}
          dohvatiPodatke={dohvatiPodatke}
          setChoosenDifficulty={setChoosenDifficulty}
        />
      )}

      {!!questions.length && (
        <Quiz
          questions={questions}
          noQuestions={noQuestions}
          clickedAnswer={clickedAnswer}
          shuffledAns={shuffledAns}
          submitAnswer={submitAnswer}
          howManyCorrect={howManyCorrect}
          resetData={resetData}
        />
      )}
    </div>
  );
}

export default App;
