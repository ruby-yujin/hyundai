import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRouter from "./CustomRouter";
import { NavProvider } from "./context/useNav";

const App = () => {
  return (
    <NavProvider>
      <div className="App">
        <BrowserRouter>
          <CustomRouter />
        </BrowserRouter>
      </div>
    </NavProvider>
  );
};

export default App;
