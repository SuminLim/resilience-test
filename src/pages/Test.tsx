import * as React from 'react';
import CheckupBoard from "../components/CheckupBoard";
import bind from "bind-decorator";

interface TestPageProps {

}

interface TestPageState {
  step: number;
  scoreList: number[]
}

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
        <p>step: {step}</p>
        <p>scoreList: {scoreList}</p>
        <CheckupBoard onSelectScore={this.handleOnSelectScore} />
      </div>
    );
  }
}

export default TestPage;
