import React, {useCallback, useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {QUESTION, CalculationType, ResultDescriptionMap} from "../constants";
import PageWrapper from "../components/PageWrapper";
import styled from "styled-components";

const Header = styled.strong`
  display: block;
  padding-top: 32px;
  font-size: 40px;
  line-height: 50px;
  text-align: center;

  >p {
    padding-top: 17px;
    font-size: 18px;
    line-height: 30px;
    color: #444;
    text-align: center;
    white-space: pre-line;
    word-break: break-all;

    margin: 0;
  }
`;

const ColorG1 = styled.span`
  color: #dc287c;
`;

const ResultPage: React.FC = () => {
  const location = useLocation<number[]>();

  const [totalScore, setTotalScore] = useState<number>(0);

  const renderMyResult = useCallback(
    () => {
      if (totalScore < 170) {
        return ResultDescriptionMap[170];
      }

      if (totalScore < 180) {
        return ResultDescriptionMap[180];
      }
    },
    [totalScore],
  );


  useEffect(() => {
    const scoreList = location.state;

    let total = 0;

    scoreList.forEach((score, index) => {
      const currentQuestion = QUESTION[index];

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
    <PageWrapper>
      <Header>
        당신의 점수는
        <br />
        <ColorG1>{totalScore}점, '고요한 영화관'</ColorG1>

        <p>우리나라 사람들의 평균점수는 <ColorG1>195점</ColorG1> 이에요.</p>
      </Header>
    </PageWrapper>
  );
};

export default ResultPage;

