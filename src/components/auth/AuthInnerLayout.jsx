import React from "react";
import styled from "styled-components";

const AuthInnerLayout = ({ children }) => {
  return <AuthInnerLayoutWrap>{children}</AuthInnerLayoutWrap>;
};

const AuthInnerLayoutWrap = styled.div`
  position: relative;
  max-width: 1560px;
  margin: 0 auto;
  padding: 80px 0 0;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 60px 4% 0;
    flex-direction: column;
  }
`;

export default AuthInnerLayout;
