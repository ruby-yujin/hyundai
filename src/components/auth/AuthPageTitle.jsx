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

  @media screen and (max-width: 1024px) {
    text-align: center;
    margin-bottom: 40px;
    img {
      width: 100px;
    }
    h1 {
      font-size: 4rem;
      margin: 20px 0 10px;
    }
    p {
      font-size: 2.5rem;
    }
  }
`;

export default AuthPageTitle;
