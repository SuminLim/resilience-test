import * as React from 'react';
import {Route} from 'react-router-dom';
import {Home} from "../pages";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Route exact path="/" component={Home}/>
      </Wrapper>
    );
  }
}

export default App;
