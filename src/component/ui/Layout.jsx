import React from "react";
import styled from "styled-components";
import Header from "../block/Header";
import Footer from "../block/Footer";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent >{children}</MainContent >
      <Footer />
    </>
  );
}
export default Layout;