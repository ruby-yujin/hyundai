import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import { ROUTER_PATH } from "./constants/constants";

const CustomRouter: React.FC = () => {
  return (
    <Routes>
      {/* 로그인 */}
      <Route path={ROUTER_PATH.login} element={<Login />} />
      {/* 회원가입 */}
      <Route path={ROUTER_PATH.signup} element={<Login />} />
      {/* 단체별 공제현황 */}
      <Route path={ROUTER_PATH.deductionStatus} element={<Login />} />
      {/* 단체 회원관리  */}
      <Route path={ROUTER_PATH.deductionStatusTotal} element={<Login />} />

      {/* {ROUTER_INFOS.map((info, index) => (
        <Route key={index} path={info.path} element={info.element} />
      ))} */}
    </Routes>
  );
};

export default CustomRouter;
