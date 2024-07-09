import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTER_PATH } from "./constants/constants";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function CustomRouter() {
  return (
    <Routes>
      {/* 로그인 */}
      <Route path={ROUTER_PATH.login} element={<Login />} />
      {/* 시스템사용등록 */}
      <Route path={ROUTER_PATH.register} element={<Register />} />
      {/* 단체별 공제현황 */}
      <Route path={ROUTER_PATH.deductionStatus} element={<Login />} />
      {/* 단체 회원관리  */}
      <Route path={ROUTER_PATH.deductionStatusTotal} element={<Login />} />

      {/* {ROUTER_INFOS.map((info, index) => (
        <Route key={index} path={info.path} element={info.element} />
      ))} */}
    </Routes>
  );
}

export default CustomRouter;
