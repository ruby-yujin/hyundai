import React from "react";
import styled from "styled-components";

const AuthOuterLayout = ({ children }) => {
  return (
    <AuthOuterLayoutWrap>
      <BuleBg src="img/auth/bg.png" alt="파란배경 이미지" />
      {children}
    </AuthOuterLayoutWrap>
  );
};

const AuthOuterLayoutWrap = styled.div`
  position: relative;
`;

const BuleBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background: linear-gradient(to right, #1f3e74, #284f94); */
`;

export default AuthOuterLayout;
