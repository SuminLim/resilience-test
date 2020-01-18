import React from 'react';
import styled from "styled-components";

interface ButtonScoreProps {
  selected?: boolean;

  onClick: () => void;
}

const Wrapper = styled.button<{ selected?: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 36px;
  color: #fff;
  background-color: ${({ selected }) => selected ? '#FFD307' : '#e5e5e5'};
`;

const ButtonScore: React.FC<ButtonScoreProps> = ({children, selected, onClick}) => {
  return (
    <Wrapper
      selected={selected}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
};

export default ButtonScore;
