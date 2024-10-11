import Layout from "../ui/Layout";
import SideImageLayout from "../block/SideImageLayout";
import ContentText from "../atom/ContentText";
import Label from "../ui/Label";
import introImg from "../../assets/introduceAcademy.png";
import OTC from "../../assets/OrganizingTheContest.png";
import styled, { keyframes } from "styled-components";
import Logo from "../block/Logo";

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
        <SideImageLayout imgSrc={OTC} width={200} maxWidth={200} isLeft={false}>
          <ContentText contentText={Label.contestIntroduce} />
        </SideImageLayout>
      </AnimatedContainer>
    </Layout>
  );
}

export default IntroduceHiarcPage;