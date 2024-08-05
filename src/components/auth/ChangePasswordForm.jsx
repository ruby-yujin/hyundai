import React from "react";
import styled from "styled-components";
import { Formik, Form, ErrorMessage } from "formik";
import { AuthFormWrap } from "./LoginForm";
import InputGroup from "../common/InputGroup";
import BtnSubmit from "./BtnSubmit";
import { BtnWrap } from "./LoginForm";
import { ChangePwSchema } from "../../schema/formSchema";

const initialValues = {
  memberNumber: "F0100000",
  memberName: "홍길동",
  memberPhone: "010-0000-0000",
  memberPassword: "",
  memberPasswordConfirm: ""
};

const ChangePasswordForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <AuthFormWrap>
      <Formik
        initialValues={initialValues}
        validationSchema={ChangePwSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputGroup
              name="memberNumber"
              labelText="사원번호"
              inputType="text"
              placeholder="F00000"
              disabled={true}
            />
            <InputGroup
              name="memberName"
              labelText="사원명"
              inputType="text"
              disabled={true}
            />
            <InputGroup
              name="memberPhone"
              labelText="휴대폰번호"
              inputType="text"
              disabled={true}
            />
            <InputGroup
              name="memberPassword"
              labelText="새 비밀번호"
              inputType="password"
              placeholder="새 비밀번호를 입력해주세요."
              disabled={false}
            />
            <ErrorMessage name="memberPassword" component={ErrorText} />

            <InputGroup
              name="memberPasswordConfirm"
              labelText="비밀번호 확인"
              inputType="password"
              placeholder="새 비밀번호를 입력해주세요."
              disabled={false}
            />
            <ErrorMessage name="memberPasswordConfirm" component={ErrorText} />

            <BtnWrap>
              <BtnSubmit type="submit" text="비밀번호 변경" />
            </BtnWrap>
          </Form>
        )}
      </Formik>
    </AuthFormWrap>
  );
};

export default ChangePasswordForm;

const ErrorText = styled.div`
  color: #f8fc12;
  font-size: 1.2rem;
  margin-top: -10px;
  margin-bottom: 10px;
  padding-left: 30px;
`;
