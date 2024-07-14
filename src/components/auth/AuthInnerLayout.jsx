import React from "react";
import styled from "styled-components";

const AuthInnerLayout = ({ children }) => {
  return <AuthInnerLayoutWrap>{children}</AuthInnerLayoutWrap>;
};

const AuthInnerLayoutWrap = styled.div`
  position: relative;
  max-width: 1560px;
  margin: 0 auto;
  padding: 80px 1% 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    height: 100%;
    padding: 30px 4%;
    flex-direction: column;
    overflow-y: scroll;
  }
`;

export default AuthInnerLayout;
