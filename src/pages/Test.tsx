import * as React from 'react';
import CheckupBoard from "../components/CheckupBoard";
import bind from "bind-decorator";
import styled from "styled-components";
import ButtonMove from "../components/ButtonMove";
import {QUESTION} from "../constants";

interface TestPageProps {

}

interface TestPageState {
  step: number;
  scoreList: number[]
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

class TestPage extends React.Component<TestPageProps, TestPageState> {
  readonly state: Readonly<TestPageState> = {
    step: 1,
    scoreList: [],
  };

  get defaultValue() {
    const { step, scoreList } = this.state;
    return Number(scoreList[step - 1]) || undefined;
  }

  @bind
  handleOnSelectScore(score: number) {
    this.setState(
      (state) => ({
        scoreList: [
          ...state.scoreList,
          score,
        ],
      }),
      () => {
        setTimeout(
          () => this.setState(
            (state) => ({
              step: state.step + 1,
            }),
          ),
          1000,
        );
      }
    );
  }

  @bind
  handleOnPrevStep() {
    this.setState(
      (state) => ({
        step: state.step - 1,
        scoreList: state.scoreList.splice(0, state.step - 1),
      }),
    )
  }

  @bind
  handleOnInitStep() {
    this.setState(
      {
        step: 1,
        scoreList: [],
      },
    )
  }

  render() {
    const { step, scoreList } = this.state;
    return (
      <Wrapper>
        <Header>
          {
            step !== 1 &&
            <ButtonMove onClick={this.handleOnPrevStep}>이전으로</ButtonMove>
          }
          <NumPage>{step} / {QUESTION.length}</NumPage>
          {
            step !== 1 &&
            <ButtonMove onClick={this.handleOnInitStep}>처음으로</ButtonMove>
          }
        </Header>
        <p>scoreList: {scoreList}</p>

        <Question>{QUESTION[step]}</Question>

        <CheckupBoard
          defaultValue={this.defaultValue}
          onSelectScore={this.handleOnSelectScore}
        />
      </Wrapper>
    );
  }
}

export default TestPage;
