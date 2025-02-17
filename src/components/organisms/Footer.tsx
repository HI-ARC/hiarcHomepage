import React from "react";
import styled from "styled-components";
import FooterLogo from "@/components/atoms/footer/FooterLogo";
import FooterContactInfo from "@/components/molecules/FooterContactInfo";

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fffdf0;
  padding-top: 15px;
  padding-bottom: 16px;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Footer: React.FC = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <FooterLogo />
        <FooterContactInfo />
      </InnerContainer>
    </OuterContainer>
  );
};

export default Footer;
