import React from 'react';
import ButtonScore from "../ButtonScore";
import styled from "styled-components";

interface CheckupBoardProps {
  selectedValue?: number;
  disabled?: boolean;

  onSelectScore: (score: number) => void;
}

const Wrapper = styled.div`
  button {
    margin-right: 5px;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

const CheckupBoard: React.FC<CheckupBoardProps> = ({ selectedValue, disabled, onSelectScore }) => {
  function makeOnClick(score: number) {
    return () => {
      onSelectScore(score);
    }
  }

  return (
    <Wrapper>
      <div>
        <ButtonScore
          selected={selectedValue ? selectedValue >= 1 : undefined}
          disabled={disabled}
          onClick={makeOnClick(1)}
        >
          1
        </ButtonScore>
        <ButtonScore
          selected={selectedValue ? selectedValue >= 2 : undefined}
          disabled={disabled}
          onClick={makeOnClick(2)}
        >
          2
        </ButtonScore>
        <ButtonScore
          selected={selectedValue ? selectedValue >= 3 : undefined}
          disabled={disabled}
          onClick={makeOnClick(3)}
        >
          3
        </ButtonScore>
        <ButtonScore
          selected={selectedValue ? selectedValue >= 4 : undefined}
          disabled={disabled}
          onClick={makeOnClick(4)}
        >
          4
        </ButtonScore>
        <ButtonScore
          selected={selectedValue ? selectedValue >= 5 : undefined}
          disabled={disabled}
          onClick={makeOnClick(5)}
        >
          5
        </ButtonScore>
      </div>
      <Description>
        <strong>전혀 그렇지 않다</strong>
        <strong>매우 그렇다</strong>
      </Description>
    </Wrapper>
  );
};

export default CheckupBoard;
