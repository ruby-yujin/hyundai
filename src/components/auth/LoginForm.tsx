import React from "react";
import styled from "styled-components";
import { Formik } from "formik";

import InputGroup from "../common/InputGroup";
import OtherLinks from "./OtherLinks";
import ConfirmNumber from "./ConfirmNumber";
import BtnSubmit from "./BtnSubmit";

const initialValues = { memberNumber: "", memberPhone: "", memberPassword: "" };

const LoginForm: React.FC = () => {
  return (
    <LoginFormWrap>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <form action="">
          <InputGroup
            name="memberNumber"
            labelText="사원번호"
            inputType="text"
            placeholder="사원번호를 입력해주세요."
            disabled={false}
          />
          <InputGroup
            name="memberPhone"
            labelText="휴대폰번호"
            inputType="text"
            placeholder="숫자만 입력해주세요."
            disabled={false}
          />
          <InputGroup
            name="memberPassword"
            labelText="비밀번호"
            inputType="password"
            placeholder="비밀번호를 입력해주세요."
            disabled={false}
          />
          <ConfirmNumber />

          <BtnSubmit type="submit" text="Login" />
        </form>
      </Formik>
      <OtherLinks />
    </LoginFormWrap>
  );
};

const LoginFormWrap = styled.div`
  max-width: 500px;
  width: 100%;
  margin-top: 3%;
`;

export default LoginForm;
