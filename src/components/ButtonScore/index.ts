import styled from "styled-components";

const ButtonScore = styled.button<{ selected?: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 36px;
  color: #fff;
  background-color: ${({ selected }) => selected ? '#FFD307' : '#e5e5e5'};
`;

export default ButtonScore;
