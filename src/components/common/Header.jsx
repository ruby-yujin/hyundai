import React from "react";
import styled from "styled-components";
import { AlignJustify, LogOut } from "lucide-react";
import { useNav } from "../../context/useNav";

function Header({ pageTitle }) {
  const { toggleNav } = useNav();

  return (
    <HeaderWrap>
      <BtnNav onClick={toggleNav}>
        <AlignJustify size={32} />
      </BtnNav>
      <h1>{pageTitle}</h1>
      <BtnLogout>
        <strong>로그아웃</strong>
        <LogOut />
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
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const BtnNav = styled.button`
  position: absolute;
  top: 50%;
  left: 15px;
  margin-top: -16px;
  svg {
    color: #fff;
    width: 30px;
  }
`;

const BtnLogout = styled.button`
  position: absolute;
  top: 50%;
  right: 40px;
  margin-top: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  strong {
    display: block;
    color: #fff;
    font-size: 1.5rem;
  }
  svg {
    color: #fff;
    width: 15px;
  }
  @media screen and (max-width: 1024px) {
    right: 15px;
    margin-top: -12px;
    strong {
      display: none;
    }
    svg {
      width: 30px;
    }
  }
`;

export default Header;
