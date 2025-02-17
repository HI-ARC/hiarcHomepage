import React from "react";
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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 54px;
`;

const StyledParagraph = styled.p`
  font-size: clamp(14px, 2vw, 18px);
  font-family: NanumSquareNeo;
  margin-bottom: 0.5rem;
`;

const StyledList = styled.ul`
  list-style: none;
  padding-left: 10px;
  font-size: clamp(14px, 2vw, 18px);
  font-family: NanumSquareNeo;
  margin-bottom: 0.5rem;
`;

const IntroduceHiarcPage: React.FC = () => {
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
          showToggle={true}
          toggleText="ICPC 신촌 자세히 알아보기"
        >
          <StyledParagraph>{Label.DetailSinchon}</StyledParagraph>
        </SectionTemplate>
      </AnimatedContainer>
    </Layout>
  );
};

export default IntroduceHiarcPage;
