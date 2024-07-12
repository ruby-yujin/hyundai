import React, { Children } from "react";
import styled from "styled-components";

import Header from "./Header";
import Nav from "./Nav";

function OuterLayout({ children }) {
  return (
    <OuterLayOutWrap>
      <Header pageTitle="단체관리" />
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
  display: flex;
  aside {
    width: 300px;
  }
  section {
    width: calc(100% - 300px);
    background: #1f3e74;
    padding-top: 20px;
  }
`;

const Content = styled.div`
  height: 100%;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export default OuterLayout;
