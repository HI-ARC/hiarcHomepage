import React, { useState } from "react";
import Layout from "../templates/PageTemplate";
import Label from "../ui/Label";
import styled from "styled-components";
import bannerImage from "../../assets/image/banner.png";
import SectionTemplate from "../templates/SectionTemplate";
import IntroduceHiarcBottom from "@/constants/data/introduce_hiarc/introduce_hiarc_grid_data/IntroduceHiarcBottom";
import IntroduceHiarcTop from "@/constants/data/introduce_hiarc/introduce_hiarc_grid_data/IntroduceHiarcTop";
import ContestIntroduceBottom from "@/constants/data/introduce_hiarc/contest_introduce_grid_data/ContestIntroduceBottom";
import ContestIntroduceTop from "@/constants/data/introduce_hiarc/contest_introduce_grid_data/ContestIntroduceTop";
import AssetImage from "../atoms/image/AssetImage";
import ICPCIntroduceTop from "@/constants/data/introduce_hiarc/introduce_icpc_grid_data/ICPCIntroduceTop";
import HiarcCompetition from "../ui/HiarcCompetition";
import AnimatedContainer from "../atoms/common/AnimatedContainer";
import ToggleIcon from "@/assets/icon/toggle_icon.svg?react";
import FontStyle from "../ui/FontStyle";
import Color from "../ui/Color";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 54px;
`;

const StyledParagraph = styled.p`
  ${FontStyle.body1Regular}
  font-size: clamp(12px, 2vw, 16px);
  letter-spacing: 0.3px;
  display: inline;
`;

const StyledList = styled.ul`
  list-style: none;
  ${FontStyle.body1Regular}
  font-size: clamp(12px, 2vw, 16px);
  letter-spacing: 0.3px;
  display: inline;
  margin-bottom: 0.5rem;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;
  border: none;
  background: none;
  cursor: pointer;
`;

const ToggleIconStyled = styled(ToggleIcon)<{ isOpen: boolean }>`
  transition: transform 0.3s;
  transform: ${({ isOpen }) => (isOpen ? "rotate(-90deg)" : "rotate(0deg)")};
  width: clamp(12px, 5vw, 24px);
  height: clamp(12px, 5vw, 24px);
`;

const ToggleText = styled.span`
  ${FontStyle.display1ExtraBold}
  font-size: clamp(14px, 2vw, 18px);
  margin-left: 8px;
  color: ${Color.primary};
`;

const ToggleContent = styled.div<{ isOpen: boolean }>`
  transition:
    max-height 0.3s,
    opacity 0.3s;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

  text-align: left;
  line-height: 1.5;
`;

const IntroduceHiarcPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <AnimatedContainer delay="0s">
        <SectionTemplate
          rowCount={2}
          colCount={3}
          topLayerData={IntroduceHiarcTop}
          bottomLayerData={IntroduceHiarcBottom}
          contentText={Label.academyIntroduce}
        />
      </AnimatedContainer>

      <AnimatedContainer delay="0.5s">
        <ImageContainer>
          <AssetImage
            src={bannerImage}
            caption="@ 제 1회 하이콘 대회 배경"
            maxWidth={"100%"}
          />
        </ImageContainer>
      </AnimatedContainer>

      <AnimatedContainer delay="1s">
        <SectionTemplate
          align="right"
          rowCount={3}
          colCount={3}
          topLayerData={ContestIntroduceTop}
          bottomLayerData={ContestIntroduceBottom}
          contentText={Label.contestIntroduce}
          showToggle={true}
          toggleText="대회 자세히 알아보기"
        >
          <StyledList>
            {HiarcCompetition.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </StyledList>
        </SectionTemplate>
      </AnimatedContainer>

      <AnimatedContainer delay="1.5s">
        <SectionTemplate
          align="right"
          rowCount={1}
          colCount={3}
          topLayerData={ICPCIntroduceTop}
          bottomLayerData={[]}
          contentText={Label.ICPCIntroduce}
          showToggle={false}
          toggleText="ICPC 신촌 자세히 알아보기"
          paddingBottom="0px"
        ></SectionTemplate>
        <ToggleButton onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
          <ToggleIconStyled isOpen={isOpen} />
          <ToggleText>{"ICPC 신촌 자세히 알아보기"}</ToggleText>
        </ToggleButton>
        <ToggleContent isOpen={isOpen}>
          <StyledParagraph>{Label.DetailSinchon}</StyledParagraph>
        </ToggleContent>
      </AnimatedContainer>
    </Layout>
  );
};

export default IntroduceHiarcPage;
