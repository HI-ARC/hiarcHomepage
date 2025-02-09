import Layout from "../templates/PageTemplate";
import SideImageLayout from "../blocks/SideImageLayout";
import ContentText from "../atoms/ContentText";
import Label from "../ui/Label";
import introImg from "../../assets/introduceHiarc2.png";
import OTC from "../../assets/OrganizingTheContest2.png";
import styled, { keyframes } from "styled-components";
import Logo from "../blocks/Logo";
import ToggleButton from "../atoms/ToggleButton";
import ToggleLabel from "../atoms/ToggleLabel";
import BlueButton from "../atoms/SinchonBlueButton";
import SectionTemplate from "../templates/SectionTemplate";
import IntroduceHiarcBottom from "@/constants/data/introduce_hiarc/IntroduceHiarcBottom";
import IntroduceHiarcTop from "@/constants/data/introduce_hiarc/IntroduceHiarcTop";
import ContestIntroduceBottom from "@/constants/data/introduce_hiarc/ContestIntroduceBottom";
import ContestIntroduceTop from "@/constants/data/introduce_hiarc/ContestIntroduceTop";

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

const ContextAndToggle = styled.div`
  gap: 15px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const ICPCSinchonLayout = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
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
        >
          <div className="flex-1 text-[clamp(14px,2vw,18px)] font-NanumSquareNeo">
            {Label.academyIntroduce}
          </div>
        </SectionTemplate>
      </AnimatedContainer>

      {/* 로고 */}
      <AnimatedContainer delay="0.5s">
        <Logo />
      </AnimatedContainer>

      <AnimatedContainer delay="1s">
        <SectionTemplate
          align="right"
          rowCount={3}
          colCount={3}
          topLayerData={ContestIntroduceTop}
          bottomLayerData={ContestIntroduceBottom}
        >
          <div className="flex-1 text-[clamp(14px,2vw,18px)] font-NanumSquareNeo">
            {Label.academyIntroduce}
          </div>
        </SectionTemplate>
      </AnimatedContainer>

      {/* 세 번째 이미지와 텍스트 */}
      <AnimatedContainer delay="1.5s">
        <ICPCSinchonLayout>
          <ContextAndToggle>
            <ContentText contentText={Label.MoreIntroduce} />
            <ToggleButton
              text="ICPC 신촌 자세히 알아보기"
              innerText={Label.DetailSinchon}
            />
          </ContextAndToggle>
          <BlueButton text="ICPC 신촌" />
        </ICPCSinchonLayout>
      </AnimatedContainer>
    </Layout>
  );
};

export default IntroduceHiarcPage;
