import React from "react";
import styled from "styled-components";

const ConfirmNumber: React.FC = () => {
  return (
    <ConfirmNumberWrap>
      <input
        type="text"
        defaultValue="045645"
        style={{ letterSpacing: "10px" }}
      />
      <input
        type="text"
        placeholder="숫자 6자리를 입력해주세요"
        style={{ fontSize: "24px" }}
      />
    </ConfirmNumberWrap>
  );
};

const ConfirmNumberWrap = styled.div`
  width: 300px;
  margin: 45px auto 50px;
  input {
    width: 100%;
    height: 70px;
    border: none;
    background: #fff;
    color: #666666;
    font-size: 35px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export default ConfirmNumber;
