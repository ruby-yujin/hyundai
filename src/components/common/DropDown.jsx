import React from "react";
import styled from "styled-components";

function DropDown() {
  return (
    <DropDownWrap>
      <select name="" id="">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <BtnSearch>조회</BtnSearch>
    </DropDownWrap>
  );
}

const DropDownWrap = styled.div`
  padding: 2rem 4rem;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  select {
    width: 300px;
  }
`;
const BtnSearch = styled.div`
  width: 50px;
  height: 24px;
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #295095;
`;
export default DropDown;
