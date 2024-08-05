import React from "react";
import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

const ConfirmNumber = () => {
  return (
    <ConfirmNumberWrap>
      <input type="text" defaultValue="045645" readOnly />
      <Field
        type="text"
        name="loginConfirmNumber"
        placeholder="숫자 6자리를 입력해주세요"
        as="input"
      />
      <ErrorMessage name="loginConfirmNumber" component={ErrorText} />
    </ConfirmNumberWrap>
  );
};

const ConfirmNumberWrap = styled.div`
  width: 300px;
  margin: 3rem auto;
  input {
    width: 100%;
    height: 70px;
    border: none;
    background: #fff;
    color: #666666;
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 10px;
    &:first-child {
      font-size: 3.5rem;
      letter-spacing: 10px;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 94%;
    display: flex;
    justify-content: space-between;
    margin: 2rem auto 3rem;
    input {
      width: calc(100% - 100px);
      height: 45px;
      font-size: 1.5rem;
      margin-bottom: 0;
      margin-left: 10px;
      &:first-child {
        letter-spacing: 0;
        width: 100px;
        font-size: 2.2rem;
      }
    }
  }
`;

const ErrorText = styled.div`
  color: #f8fc12;
  font-size: 1.2rem;
  margin-top: 5px;
  text-align: center;
`;

export default ConfirmNumber;
