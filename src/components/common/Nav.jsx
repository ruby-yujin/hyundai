import React from "react";
import styled from "styled-components";

function Nav() {
  return <NavWrap>Nav</NavWrap>;
}

const NavWrap = styled.nav`
  width: 300px;
  height: 100vh;
  background: #1f3e74;
  box-shadow: 14px -11px 5px -11px rgba(0, 0, 0, 0.56);
  -webkit-box-shadow: 14px -11px 5px -11px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 14px -11px 5px -11px rgba(0, 0, 0, 0.56);
`;

export default Nav;
