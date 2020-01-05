import React from 'react';
import App from "../shared/App";
import {BrowserRouter} from "react-router-dom";

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );
};

export default Root;
