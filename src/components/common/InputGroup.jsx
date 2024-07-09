import React from "react";
import { Field } from "formik";
import styled from "styled-components";

const InputGroup = ({ labelText, name, inputType, placeholder, disabled }) => {
  return (
    <InputGroupWrapper>
      <InputLabel htmlFor={labelText}>{labelText}</InputLabel>
      <InputField
        name={name}
        type={inputType}
        placeholder={placeholder}
        disabled={disabled}
      />
    </InputGroupWrapper>
  );
};

const InputGroupWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const InputLabel = styled.label`
  color: #fff;
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 1024px) {
    padding-left: 30px;
    font-size: 1.8rem;
  }
`;

const InputField = styled(Field)`
  width: 100%;
  height: 70px;
  border: none;
  background: #fff;
  border-radius: 999px;
  padding: 0.5rem 1rem;
  font-size: 2.2rem;
  box-shadow: 1px 15px 10px 1px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 1px 15px 10px 1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 1px 15px 10px 1px rgba(0, 0, 0, 0.3);
  text-indent: 20px;
  &:focus {
    outline: none;
    border-color: #4285f4;
  }
  @media screen and (max-width: 1024px) {
    height: 55px;
    font-size: 1.8rem;
  }
`;

export default InputGroup;
