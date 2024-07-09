import React from "react";
import styled from "styled-components";

const AuthPageTitle = ({ title, description }) => {
  return (
    <AuthPageTitleWrap>
      <img src="img/auth/icon-peoples.png" alt="단체아이콘" />
      <h1>{title}</h1>
      <p>{description}</p>
    </AuthPageTitleWrap>
  );
};

const AuthPageTitleWrap = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
  img {
    width: 200px;
  }
  h1 {
    font-size: 10rem;
    font-weight: 400;
    margin: 40px 0 20px;
  }
  p {
    font-size: 7rem;
    font-weight: 400;
  }
`;

export default AuthPageTitle;
