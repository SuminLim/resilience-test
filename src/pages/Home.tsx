import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  text-align: left;
`;

const Divider = styled.hr`
  width: 50vw;
`;

const Description = styled.p`
  text-align: left;
`;

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

const HomePage = () => {
  return (
    <Wrapper>
      <Header>
        나의 회복탄력성 지수는?<br/>
        &lt;KRQ-53 테스트&gt;
      </Header>
      <Divider/>
      <div>
        <Description>
          <strong>응답 방법: </strong>
          각 문항을 읽은 후 다음과 같이 점수를 기록한다.
        </Description>
        <Description>
          전혀 그렇지 않다 1 / 그렇지 않다 2 / 보통이다 3 / 어느 정도 그렇다 4 / 매우 그렇다 5
        </Description>

        <ButtonStart to="/test">
          테스트 시작!
        </ButtonStart>
      </div>
    </Wrapper>
  );
};

export default HomePage;
