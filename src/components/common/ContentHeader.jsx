import React from "react";
import styled from "styled-components";

function ContentHeader({ children }) {
  return <ContentHeaderWrap>{children}</ContentHeaderWrap>;
}

const ContentHeaderWrap = styled.div`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    padding: 2rem 1rem;
    flex-direction: column;
  }
`;

export default ContentHeader;
