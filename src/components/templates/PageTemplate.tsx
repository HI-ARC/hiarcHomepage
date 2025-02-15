import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "@/components/organisms/header/Header";
import Footer from "@/components/organisms/footer/Footer";

interface PageTemplateProps {
  children: ReactNode;
  align?: "center" | "top";
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainContent = styled.main<{ align: "center" | "top" }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: center;
  width: 100%;
  max-width: 1000px;
  padding: 0 1rem;
  ${(props) =>
    props.align === "center"
      ? `
    align-items: center;
    justify-content: center;
  `
      : `
    align-items: flex-start;
    justify-content: flex-start;
  `}
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  align = "center",
}) => {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainContent align={align}>{children}</MainContent>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

export default PageTemplate;
