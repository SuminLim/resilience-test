import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { QUESTION, CalculationType } from "../constants";

const ResultPage: React.FC = () => {
  const location = useLocation<number[]>();

  const [totalScore, setTotalScore] = useState<number>(0);

  useEffect(() => {
    const scoreList = location.state;
    const questionList = QUESTION.splice(1, QUESTION.length);

    let total = 0;

    scoreList.forEach((score, index) => {
      const currentQuestion = questionList[index];

      if (currentQuestion.calculation === CalculationType.PLUS) {
        total += score;
      }

      if (currentQuestion.calculation === CalculationType.MINUS) {
        total += (6 - score);
      }
    });

    setTotalScore(total);
  }, [location]);

  return (
    <div>
      테스트 결과 페이지

      총점 {totalScore}
    </div>
  );
};

export default ResultPage;

