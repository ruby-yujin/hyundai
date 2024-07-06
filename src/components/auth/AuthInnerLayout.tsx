import React, { ReactNode } from "react";
import styled from "styled-components";

interface AuthInnerLayoutProps {
  children: ReactNode;
}

const AuthInnerLayout: React.FC<AuthInnerLayoutProps> = ({ children }) => {
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
`;

export default AuthInnerLayout;
