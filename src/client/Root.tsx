import React from 'react';
import App from "../shared/App";
import {BrowserRouter} from "react-router-dom";

const Root: React.FC = () => {
  return (
    <BrowserRouter basename="/resilience-test">
      <App/>
    </BrowserRouter>
  );
};

export default Root;
