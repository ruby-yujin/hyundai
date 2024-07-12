import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTER_PATH } from "./constants/constants";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ChangePassword from "./pages/auth/ChangePassword";
import ChangePhone from "./pages/auth/ChangePhone";
import AllMemberGroup from "./pages/member/AllMemberGroup";

function CustomRouter() {
  return (
    <Routes>
      {/* 로그인 */}
      <Route path={ROUTER_PATH.login} element={<Login />} />
      {/* 시스템사용등록 */}
      <Route path={ROUTER_PATH.register} element={<Register />} />
      {/* 비밀번호 변경 */}
      <Route path={ROUTER_PATH.chagnePassword} element={<ChangePassword />} />
      {/* 전화번호 변경 */}
      <Route path={ROUTER_PATH.chagnePhone} element={<ChangePhone />} />

      {/* 로그인후 단체관리 첫페이지 */}
      <Route path={ROUTER_PATH.allMemberGroup} element={<AllMemberGroup />} />

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
