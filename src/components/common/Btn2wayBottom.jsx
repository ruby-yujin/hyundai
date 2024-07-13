import React from "react";
import styled from "styled-components";

function Btn2wayBottom() {
  return (
    <Btn2wayBottomWrap>
      <BtnGray type="">탈퇴</BtnGray>
      <BtnNavy type="">출력</BtnNavy>
    </Btn2wayBottomWrap>
  );
}

const Btn2wayBottomWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
`;

const BtnGray = styled.button`
  width: 50px;
  height: 24px;
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #666;
  @media screen and (max-width: 1024px) {
    width: 46px;
    font-size: 1rem;
  }
`;
const BtnNavy = styled.button`
  width: 50px;
  height: 24px;
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1f3e74;
  @media screen and (max-width: 1024px) {
    width: 46px;
    font-size: 1rem;
  }
`;
export default Btn2wayBottom;
