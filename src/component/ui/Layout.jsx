import React from "react";
import styled from "styled-components";
import Header from "../block/Header";
import Footer from "../block/Footer";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1; /* 남는 공간을 차지하여 Footer를 아래로 밀어냄 */
  align-self: center;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
