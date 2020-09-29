import React, { useCallback, useState } from 'react';
import CheckupBoard from "../components/CheckupBoard";
import styled from "styled-components";
import ButtonMove from "../components/ButtonMove";
import {QUESTION, TOTAL_QUESTION_COUNT} from "../constants";
import { RouteComponentProps } from 'react-router-dom';

interface TestPageProps extends RouteComponentProps {

}

const Wrapper = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.div`
  margin-top: 41px;
  display: flex;
  justify-content: space-around;
`;

const NumPage = styled.span`
  display: inline-block;
  height: 32px;
  padding: 0 16px;
  font-size: 15px;
  line-height: 31px;
  color: #fff;
  background-color: #434343;
  border-radius: 15px;
  vertical-align: top;
`;

const Question = styled.strong`
  display: block;
  margin: 15px 0 50px;
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  color: #444;
  word-break: break-all;
  white-space: pre-line;
  max-width: 700px;
`;

const TestPageFunc: React.FC<TestPageProps> = ({ history }) => {
  const [step, setStep] = useState<number>(1);
  const [scoreList, setScoreList] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnPrevStep = useCallback(() => {
    const prevStepValue = step - 1;
    setStep(prevStepValue);
    setScoreList(scoreList.splice(0, prevStepValue));
  }, [scoreList, step]);

  const handleOnInitStep = useCallback(() => {
    setStep(0);
    setScoreList([]);
  }, []);

  const handleOnSelectScore = useCallback((score: number) => {
    setScoreList(
      [
        ...scoreList.splice(0, step - 1),
        score,
      ],
    );
    setIsLoading(true);

    setTimeout(
      () => {
        if (step === TOTAL_QUESTION_COUNT) {
          history.push('/result');
        } else {
          setStep(step + 1);
          setIsLoading(false);
        }
      },
      1000,
    );
  }, [history, scoreList, step]);

  const selectedScore = Number(scoreList[step - 1]) || undefined;

  return (
    <Wrapper>
      <Header>
        {
          step !== 1 &&
          <ButtonMove onClick={handleOnPrevStep}>이전으로</ButtonMove>
        }
        <NumPage>{step} / {TOTAL_QUESTION_COUNT}</NumPage>
        {
          step !== 1 &&
          <ButtonMove onClick={handleOnInitStep}>처음으로</ButtonMove>
        }
      </Header>

      <Question>{QUESTION[step]}</Question>

      <CheckupBoard
        selectedValue={selectedScore}
        disabled={isLoading}
        onSelectScore={handleOnSelectScore}
      />
    </Wrapper>
  );
};

export default TestPageFunc;
