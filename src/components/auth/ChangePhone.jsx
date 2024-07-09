import React from "react";
import styled from "styled-components";
import { Formik } from "formik";

import { AuthFormWrap } from "./LoginForm";
import InputGroup from "../common/InputGroup";
import BtnSubmit from "./BtnSubmit";

const initialValues = { memberNumber: "", memberPhone: "", memberPassword: "" };

const ChangePhone = () => {
  return (
    <AuthFormWrap>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <form action="">
          <InputGroup
            name="memberNumber"
            labelText="사원번호"
            inputType="text"
            placeholder="F00000"
            disabled={true}
          />
          <InputGroup
            name="memberNumber"
            labelText="사원명"
            inputType="text"
            placeholder="홍길동"
            disabled={true}
          />
          <InputGroup
            name="memberPhone"
            labelText="휴대폰번호"
            inputType="text"
            placeholder="010-0000-0000"
            disabled={false}
          />
          <InputGroup
            name="memberPassword"
            labelText="비밀번호"
            inputType="password"
            placeholder="비밀번호를 입력해주세요."
            disabled={false}
          />

          <BtnWrap>
            <BtnSubmit type="submit" text="전화번호 변경" />
          </BtnWrap>
        </form>
      </Formik>
    </AuthFormWrap>
  );
};

const BtnWrap = styled.div`
  margin-top: 20%;
`;

export default ChangePhone;
