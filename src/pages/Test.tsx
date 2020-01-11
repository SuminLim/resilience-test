import * as React from 'react';
import CheckupBoard from "../components/CheckupBoard";
import bind from "bind-decorator";
import styled from "styled-components";
import ButtonMove from "../components/ButtonMove";

interface TestPageProps {

}

interface TestPageState {
  step: number;
  scoreList: number[]
}

const Header = styled.div`
  margin-top: 41px;
  display: flex;
  justify-content: space-evenly;
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
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  color: #444;
  word-break: break-all;
  white-space: pre-line;
`;

class TestPage extends React.Component<TestPageProps, TestPageState> {
  readonly state: Readonly<TestPageState> = {
    step: 0,
    scoreList: [],
  };

  @bind
  handleOnSelectScore(score: number) {
    this.setState(
      (state) => ({
        step: state.step + 1,
        scoreList: [
          ...state.scoreList,
          score,
        ],
      }),
    );
  }

  render() {
    const { step, scoreList } = this.state;
    return (
      <div>
        <Header>
          <ButtonMove>이전으로</ButtonMove>
          <NumPage>{step} / 10</NumPage>
          <ButtonMove>처음으로</ButtonMove>
        </Header>
        <p>scoreList: {scoreList}</p>

        <Question>삶의 의미를 느끼지 못한다</Question>

        <CheckupBoard onSelectScore={this.handleOnSelectScore} />
      </div>
    );
  }
}

export default TestPage;
