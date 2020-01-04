import React from 'react';
import styled from "styled-components";

interface ButtonScoreProps {
    onClick: () => void;
}

const Wrapper = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 36px;
  color: #fff;
  background-color: #e5e5e5;
`;

const ButtonScore: React.FC<ButtonScoreProps> = ({children, onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    );
};

export default ButtonScore;
