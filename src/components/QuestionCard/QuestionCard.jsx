import { Button } from "../Button";
import cls from "./QuestionCard.module.css";

export const QuestionCard = () => {
  return (
    <div className={cls.card}>
      <div className={cls.cardLabels}>
        <div>level: 1</div>
        <div>Not completed</div>
      </div>
      <h5 className={cls.cardTitle}>Что такое JSX?</h5>
      <div className={cls.cardAnswers}>
        <span>short answer: </span>
        <p className={cls.cardAnswer}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          veritatis! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Ducimus, aliquam!
        </p>
      </div>
      <Button onClick={() => {}}>View</Button>
    </div>
  );
};

// export default QuestionCard
