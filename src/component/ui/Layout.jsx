import React from "react";
import styled from "styled-components";
import Header from "../block/Header";
import Footer from "../block/Footer";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  align-self: center;
  max-width: 800px;
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
