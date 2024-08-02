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
        // validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputGroup
              type="text"
              name="loginMemberId"
              placeholder="아이디를 입력해주세요"
            />
            <ErrorMessage name="loginMemberId" component={ErrorText} />

            <InputGroup
              type="text"
              name="loginMemberPhone"
              placeholder="휴대폰 번호를 입력해주세요"
            />
            <ErrorMessage name="loginMemberPhone" component={ErrorText} />

            <InputGroup
              type="password"
              name="loginMemberPassword"
              placeholder="비밀번호를 입력해주세요"
            />
            <ErrorMessage name="loginMemberPassword" component={ErrorText} />

            <ConfirmNumber />
            <BtnWrap>
              <BtnSubmit
                type="submit"
                text="로그인"
                disabled={isSubmitting}
              ></BtnSubmit>
            </BtnWrap>
            <OtherLinks />
          </Form>
        )}
      </Formik>
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
  color: #f8fc12;
  font-size: 1.2rem;
  margin-top: -10px;
  margin-bottom: 10px;
  padding-left: 30px;
`;

export const BtnWrap = styled.div`
  margin-top: 10%;
  @media screen and (max-width: 1024px) {
    max-width: 500px;
    margin: 0 auto;
    position: fixed;
    bottom: 8rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    padding: 0 1rem;
  }
`;

export default LoginForm;
