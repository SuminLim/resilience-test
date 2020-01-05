import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const ButtonStart = styled(Link)`
  width: 170px;
  height: 70px;
  border-radius: 40px;
  color: #fff;
  background-color: #ffd307;
  line-height: 70px;
  text-align: center;
  font-size: 18px;
  display: inline-block;
`;

const Home = () => {
  return (
    <div>
      <ButtonStart to="/test">
        테스트 시작!
      </ButtonStart>
    </div>
  );
};

export default Home;
