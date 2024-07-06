import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function OtherLinks() {
  return (
    <OtherLinksWrap>
      <li>
        <Link to="">시스템사용 등록</Link>
      </li>
      <li>
        <Link to="">비밀번호 변경</Link>
      </li>
      <li>
        <Link to="">휴대폰번호 변경</Link>
      </li>
    </OtherLinksWrap>
  );
}

const OtherLinksWrap = styled.ul`
  margin-top: 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    padding: 0 0.7rem;
    position: relative;
    a {
      width: 100%;
      display: block;
      color: #fff;
      font-size: 22px;
      font-weight: 400;
    }
    &:before {
      content: "";
      width: 1px;
      height: 16px;
      background: #fff;
      position: absolute;
      top: 4px;
      left: -10px;
    }
    &:first-child:before {
      content: none;
    }
  }
`;

export default OtherLinks;
