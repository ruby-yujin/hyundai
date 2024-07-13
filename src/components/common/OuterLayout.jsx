import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Nav from "./Nav";

function OuterLayout({ children }) {
  return (
    <OuterLayOutWrap>
      <Header pageTitle= />
      <ContentGrid>
        <aside>
          <Nav />
        </aside>
        <section>
          <Content>
            {/* 페이지별 content */}
            {children}
          </Content>
        </section>
      </ContentGrid>
    </OuterLayOutWrap>
  );
}

const OuterLayOutWrap = styled.div``;

const ContentGrid = styled.main`
  position: relative;
  aside {
    width: 300px;
    position: absolute;
    top: 0;
    left: 0;
  }
  section {
    margin-left: 300px;
    width: calc(100% - 300px);
    background: #1f3e74;
    padding-top: 20px;
  }
  @media screen and (max-width: 1024px) {
    aside {
      /* display: none; */
    }
    section {
      margin-left: 0;
      width: 100%;
    }
  }
`;

const Content = styled.div`
  height: 100%;
  background: #f0f0f0;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export default OuterLayout;
