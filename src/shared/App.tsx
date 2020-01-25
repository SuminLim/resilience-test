import * as React from 'react';
import {Route} from 'react-router-dom';
import {HomePage, ResultPage, TestPage} from "../pages";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Route exact path="/" component={HomePage}/>
        <Route path="/test" component={TestPage}/>
        <Route path="/result" component={ResultPage}/>
      </Wrapper>
    );
  }
}

export default App;
