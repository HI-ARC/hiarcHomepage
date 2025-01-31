import Layout from "../ui/Layout";
import SideImageLayout from "../block/SideImageLayout";
import ContentText from "../atom/ContentText";
import Label from "../ui/Label";
import introImg from "../../assets/introduceHiarc2.png";
import OTC from "../../assets/OrganizingTheContest2.png";
import styled, { keyframes } from "styled-components";
import Logo from "../block/Logo";
import ToggleButton from "../atom/ToggleButton";
import ToggleLabel from "../atom/ToggleLabel";
import BlueButton from "../atom/SinchonBlueButton";

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
      {/* 첫 번째 이미지와 텍스트 */}
      <AnimatedContainer delay="0s">
        <SideImageLayout imgSrc={introImg} width={200} maxWidth={200}>
          <ContentText contentText={Label.academyIntroduce} />
        </SideImageLayout>
      </AnimatedContainer>

      {/* 로고 */}
      <AnimatedContainer delay="0.5s">
        <Logo />
      </AnimatedContainer>

      {/* 두 번째 이미지와 텍스트 */}
      <AnimatedContainer delay="1s">
        <SideImageLayout
          imgSrc={OTC}
          width={200}
          maxWidth={200}
          isLeft={false}
          isToggleBar={true}
        >
          <ContentText contentText={Label.contestIntroduce} />
          <ToggleButton text="대회 모아보기" innerText={ToggleLabel} />
        </SideImageLayout>
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
