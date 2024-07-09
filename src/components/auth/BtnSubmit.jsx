import React from "react";
import styled from "styled-components";

const BtnSubmit = ({ text, type }) => {
  return <BtnSubmitWrap type={type}>{text}</BtnSubmitWrap>;
};

const BtnSubmitWrap = styled.button`
  width: 100%;
  height: 70px;
  border-radius: 999px;
  border: none;
  background: #1e3d73;
  color: #fff;
  font-size: 30px;

  box-shadow: 1px 15px 10px 1px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 1px 15px 10px 1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 1px 15px 10px 1px rgba(0, 0, 0, 0.3);
`;

export default BtnSubmit;
