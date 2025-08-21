import { useState, useEffect } from "react";

import { API_URL } from "../../constants";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
// import cls from "./HomePage.module.css";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      const response = await fetch(`${API_URL}/react`);
      const questions = await response.json();

      setQuestions(questions);
      console.log("questions", questions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <Loader />
      <QuestionCardList cards={questions} />
    </>
  );
};

// export default HomePage
