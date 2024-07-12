import React from "react";
import styled from "styled-components";
import { LogOut } from "lucide-react";

function Header({ pageTitle }) {
  return (
    <HeaderWrap>
      <h1>{pageTitle}</h1>
      <BtnLogout>
        로그아웃 <LogOut size={15} />
      </BtnLogout>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  height: 60px;
  background: #1f3e74;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 1px 9px 5px -4px rgba(0, 0, 0, 0.44);
  -webkit-box-shadow: 1px 9px 5px -4px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 1px 9px 5px -4px rgba(0, 0, 0, 0.44);

  h1 {
    color: #fff;
    font-size: 2.4rem;
  }
`;

const BtnLogout = styled.button`
  position: absolute;
  top: 50%;
  right: 40px;
  margin-top: -8px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export default Header;
