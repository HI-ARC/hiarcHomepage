import HiarcLogo from "../../../assets/image/hiarc_logo.png";
import AssetImage from "../image/AssetImage";
import React from "react";
import styled from "styled-components";
import Colors from "@/constants/ui/Colors";
import FontStyle from "@/components/ui/FontStyle";

const FooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px; /* equivalent to Tailwind's space-x-4 */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px; /* equivalent to Tailwind's gap-1 */
`;

const Title = styled.div`
  ${FontStyle.subhead3Bold}

  color: ${Colors.primary};
  letter-spacing: -0.02em; /* tracking-tighter; adjust if needed */
  font-weight: 600; /* semi-bold */
  white-space: nowrap;
`;

const Subtitle = styled.p`
  color: ${Colors.primary};
  ${FontStyle.captionRegular}
  white-space: nowrap;
  margin: 0;
`;

const FooterLogo: React.FC = () => {
  return (
    <FooterLogoContainer>
      <AssetImage src={HiarcLogo} width={40} height={40} />
      <TextContainer>
        <Title>HI-ARC 하이아크</Title>
        <Subtitle>홍익대학교 컴퓨터공학과 알고리즘 학회</Subtitle>
      </TextContainer>
    </FooterLogoContainer>
  );
};

export default FooterLogo;
