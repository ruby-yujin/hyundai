import React from "react";
import styled from "styled-components";
import { Formik, Form, ErrorMessage } from "formik";
import { LoginSchema } from "../../schema/formSchema";

import InputGroup from "../common/InputGroup";
import OtherLinks from "./OtherLinks";
import ConfirmNumber from "./ConfirmNumber";
import BtnSubmit from "./BtnSubmit";

const initialValues = {
  loginMemberId: "",
  loginMemberPhone: "",
  loginMemberPassword: ""
};

const LoginForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <AuthFormWrap>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputGroup
              name="loginMemberId"
              labelText="사원번호"
              inputType="text"
              placeholder="사원번호를 입력해주세요."
              disabled={false}
            />
            <ErrorMessage name="loginMemberId" component={ErrorText} />

            <InputGroup
              name="loginMemberPhone"
              labelText="휴대폰번호"
              inputType="text"
              placeholder="숫자만 입력해주세요."
              disabled={false}
            />
            <ErrorMessage name="loginMemberPhone" component={ErrorText} />

            <InputGroup
              name="loginMemberPassword"
              labelText="비밀번호"
              inputType="password"
              placeholder="비밀번호를 입력해주세요."
              disabled={false}
            />
            <ErrorMessage name="loginMemberPassword" component={ErrorText} />

            <ConfirmNumber />

            <BtnSubmit type="submit" text="Login" disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
      <OtherLinks />
    </AuthFormWrap>
  );
};

export const AuthFormWrap = styled.div`
  max-width: 500px;
  width: 100%;
  margin-top: 3%;
  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 1.2rem;
  margin-top: -10px;
  margin-bottom: 10px;
  padding-left: 30px;
`;

export default LoginForm;
