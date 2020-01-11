import React from 'react';
import ButtonScore from "../ButtonScore";

interface CheckupBoardProps {
  onSelectScore: (score: number) => void;
}

const CheckupBoard: React.FC<CheckupBoardProps> = ({ onSelectScore }) => {
  function makeOnClick(score: number) {
    return () => {
      onSelectScore(score);
    }
  }

  return (
    <div>
      <ButtonScore onClick={makeOnClick(1)}>
        1
      </ButtonScore>
      <ButtonScore onClick={makeOnClick(2)}>
        2
      </ButtonScore>
      <ButtonScore onClick={makeOnClick(3)}>
        3
      </ButtonScore>
      <ButtonScore onClick={makeOnClick(4)}>
        4
      </ButtonScore>
      <ButtonScore onClick={makeOnClick(5)}>
        5
      </ButtonScore>
    </div>
  );
};

export default CheckupBoard;
