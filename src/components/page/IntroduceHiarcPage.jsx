// src/components/IntroduceHiarcPage.tsx
import Layout from "../templates/PageTemplate";
import Label from "../ui/Label";
import styled, { keyframes } from "styled-components";
import logo from "../../assets/hiarc-logo.png";
import SectionTemplate from "../templates/SectionTemplate";
import IntroduceHiarcBottom from "@/constants/data/introduce_hiarc/IntroduceHiarcBottom";
import IntroduceHiarcTop from "@/constants/data/introduce_hiarc/IntroduceHiarcTop";
import ContestIntroduceBottom from "@/constants/data/introduce_hiarc/ContestIntroduceBottom";
import ContestIntroduceTop from "@/constants/data/introduce_hiarc/ContestIntroduceTop";
import AssetImage from "../atoms/image/AssetImage";
import ICPCIntroduceTop from "@/constants/data/introduce_hiarc/ICPCIntroduceTop";
import HiarcCompetition from "../ui/HiarcCompetition";

// 페이드 인 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 애니메이션이 적용된 래퍼 스타일
const AnimatedContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
`;

const IntroduceHiarcPage = () => {
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
        <AssetImage
          src={logo}
          alt="하이아크 소개 이미지"
          padding={"py-10"}
          caption="@ 제 1회 하이콘 대회 배경"
        />
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
          <ul className="list-none pl-10 text-[clamp(14px,2vw,18px)] font-NanumSquareNeo mb-2">
            {HiarcCompetition.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </SectionTemplate>
      </AnimatedContainer>

      {/* 세 번째 이미지와 텍스트 */}
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
          <p className="text-[clamp(14px,2vw,18px)] font-NanumSquareNeo mb-2">
            {Label.DetailSinchon}
          </p>
        </SectionTemplate>
      </AnimatedContainer>
    </Layout>
  );
};

export default IntroduceHiarcPage;
