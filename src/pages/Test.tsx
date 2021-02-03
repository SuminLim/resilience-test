import React, { useCallback, useState } from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import CheckupBoard from "../components/CheckupBoard";
import ButtonMove from "../components/ButtonMove";
import Button from "../components/Button";
import QuestionHistoryModal from "../components/QuestionHistoryModal";
import {QUESTION, TOTAL_QUESTION_COUNT} from "../constants";

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
  word-break: keep-all;
  white-space: pre-line;
  max-width: 700px;
`;

const TestPageFunc: React.FC = () => {
  const history = useHistory<number[]>();

  const [step, setStep] = useState<number>(0);
  const [scoreList, setScoreList] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenHistoryModal, setIsOpenHistoryModal] = useState<boolean>(false);

  const handleOnPrevStep = useCallback(() => {
    setStep(step - 1);
    setScoreList(scoreList.splice(0, step));
  }, [scoreList, step]);

  const handleOnInitStep = useCallback(() => {
    setStep(0);
    setScoreList([]);
  }, []);

  const handleOnSelectScore = useCallback((score: number) => {
    const updatedScoreList = [
      ...scoreList.splice(0, step),
      score,
    ];

    setScoreList(updatedScoreList);
    setIsLoading(true);

    setTimeout(
      () => {
        if (step === TOTAL_QUESTION_COUNT) {
          history.push('/result', updatedScoreList);
        } else {
          setStep(step + 1);
          setIsLoading(false);
        }
      },
      1000,
    );
  }, [history, scoreList, step]);

  const selectedScore = Number(scoreList[step]) || undefined;

  return (
    <Wrapper>
      <Header>
        {
          step !== 0 &&
          <ButtonMove onClick={handleOnPrevStep}>이전으로</ButtonMove>
        }
        <NumPage>{step + 1} / {TOTAL_QUESTION_COUNT}</NumPage>
        {
          step !== 0 &&
          <ButtonMove onClick={handleOnInitStep}>처음으로</ButtonMove>
        }
      </Header>
      <p>{scoreList}</p>

      <Question>{QUESTION[step].label}</Question>

      <CheckupBoard
        selectedValue={selectedScore}
        disabled={isLoading}
        onSelectScore={handleOnSelectScore}
      />

      <p>
        <Button onClick={() => setIsOpenHistoryModal(true)}>답변 목록</Button>
        <QuestionHistoryModal isOpen={isOpenHistoryModal} scoreList={scoreList} />
      </p>
    </Wrapper>
  );
};

export default TestPageFunc;
