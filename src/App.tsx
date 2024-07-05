import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRouter from "./CustomRouter";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>현대중공업-새마을금고 시스템입니다 </h1>
      <BrowserRouter>
        <CustomRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
