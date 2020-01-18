import React from 'react';
import ButtonScore from "../ButtonScore";
import styled from "styled-components";

interface CheckupBoardProps {
  defaultValue?: number;

  onSelectScore: (score: number) => void;
}

const Wrapper = styled.div`
  button {
    margin-right: 5px;
  }
`;

const CheckupBoard: React.FC<CheckupBoardProps> = ({ defaultValue, onSelectScore }) => {
  function makeOnClick(score: number) {
    return () => {
      onSelectScore(score);
    }
  }

  return (
    <Wrapper>
      <ButtonScore
        selected={defaultValue ? defaultValue >= 1 : undefined}
        onClick={makeOnClick(1)}
      >
        1
      </ButtonScore>
      <ButtonScore
        selected={defaultValue ? defaultValue >= 2 : undefined}
        onClick={makeOnClick(2)}
      >
        2
      </ButtonScore>
      <ButtonScore
        selected={defaultValue ? defaultValue >= 3 : undefined}
        onClick={makeOnClick(3)}
      >
        3
      </ButtonScore>
      <ButtonScore
        selected={defaultValue ? defaultValue >= 4 : undefined}
        onClick={makeOnClick(4)}
      >
        4
      </ButtonScore>
      <ButtonScore
        selected={defaultValue ? defaultValue >= 5 : undefined}
        onClick={makeOnClick(5)}
      >
        5
      </ButtonScore>
    </Wrapper>
  );
};

export default CheckupBoard;
