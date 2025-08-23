import { useEffect, useId, useState } from "react";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button";
import cls from "./QuestionPage.module.css";

import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constants";
import { Loader, SmallLoader } from "../../components/Loader";

// const card = {
//   id: "1",
//   question: "Что такое React?",
//   answer: "React — это библиотека для создания пользовательских интерфейсов.",
//   description:
//     "React — это JavaScript-библиотека, разработанная Facebook, которая используется для построения UI с компонентным подходом. React позволяет вам создавать пользовательские интерфейсы из отдельных частей, называемых компонентами.",
//   resources: ["https://react.dev", "https://react.dev/reference/react"],
//   level: 1,
//   completed: true,
//   editDate: "03.02.2025, 19:49",
// };

export const QuestionPage = () => {
  const checkboxId = useId();
  const navigate = useNavigate();
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [isChecked, setIsChecked] = useState(true);

  const levelVariant = () =>
    card.level === 1 ? "primary" : card.level === 2 ? "warning" : "alert";
  const completedVariant = () => (card.completed ? "success" : "primary");

  const [fetchCard, isCardLoading] = useFetch(async () => {
    const response = await fetch(`${API_URL}/react/${id}`);
    const data = await response.json();

    setCard(data);
  });

  const [updateCard, isCardUpdating] = useFetch(async (isChecked) => {
    const response = await fetch(`${API_URL}/react/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed: isChecked }),
    });
    const data = await response.json();

    setCard(data);
  });

  useEffect(() => {
    fetchCard();
  }, []);

  useEffect(() => {
    card !== null && setIsChecked(card.completed);
  }, [card]);

  const onCheckboxChangeHendler = () => {
    setIsChecked(!isChecked);
    updateCard(!isChecked);
  };

  return (
    <>
      {isCardLoading && <Loader />}

      {card !== null && (
        <div className={cls.container}>
          <div className={cls.cardLabels}>
            <Badge variant={levelVariant()}>level: {card.level}</Badge>
            <Badge variant={completedVariant()}>
              {card.completed ? "Completed" : "Not completed"}
            </Badge>
            {card?.editDate && (
              <p className={cls.editDate}>Edited: {card.editDate}</p>
            )}
          </div>
          <h5 className={cls.cardTitle}>{card.question}</h5>
          <p className={cls.cardDescription}>{card.description}</p>
          <div className={cls.cardAnswers}>
            <span>short answer: </span>
            <p className={cls.cardAnswer}>{card.answer}</p>
          </div>

          <ul className={cls.cardLinks}>
            Resources:
            {card.resources.map((Link, index) => {
              return (
                <li key={index}>
                  <a href={Link.trim()} target="_blank" rel="noreferrer">
                    {Link.trim()}
                  </a>
                </li>
              );
            })}
          </ul>

          <label htmlFor={checkboxId} className={cls.cardCheckbox}>
            <input
              type="checkbox"
              id={checkboxId}
              className={cls.checkbox}
              checked={isChecked}
              onChange={onCheckboxChangeHendler}
              disabled={isCardUpdating}
            />
            <span>mark question as completed</span>

            {isCardUpdating && <SmallLoader />}
          </label>

          <Button
            onClick={() => navigate(`/editquestion/${card.id}`)}
            isDisabled={isCardUpdating}
          >
            Edit Question
          </Button>
          <Button onClick={() => navigate("/")} isDisabled={isCardUpdating}>
            Back
          </Button>
        </div>
      )}
    </>
  );
};

// export default QuestionPage
