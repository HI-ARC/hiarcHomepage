import ActivityHeader from "../blocks/ActivityHeader";
import HiconnectIntro from "../blocks/HiconnectIntro";
import HitingIntro from "../blocks/HitingIntro";
import ActiviySection from "../blocks/ActivitySection";
import ICPCIntro from "../blocks/ActivitySection";
import Label from "../ui/Label";
import Layout from "../templates/PageTemplate";
import React from "react";
import styled, { keyframes } from "styled-components";

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

const AnimatedContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
`;

const ActivityPage = () => {
  return (
    <Layout>
      <AnimatedContainer delay="0s">
        <ActivityHeader />
      </AnimatedContainer>

      <AnimatedContainer delay="0.5s">
        <ActiviySection
          titleText={"HI-CONNECT"}
          tagList={["OB 선배들과의 만남"]}
          content={Label.HiconnectIntroduce}
        />
      </AnimatedContainer>

      <AnimatedContainer delay="1s">
        <ActiviySection
          titleText={"ICPC"}
          tagList={["국제 대학생 프로그래밍 대회", "예선"]}
          content={Label.ICPCIntroduce}
        />
      </AnimatedContainer>

      <AnimatedContainer delay="1.5s">
        <ActiviySection
          titleText={"하이팅"}
          tagList={["hi-arc.quest/home"]}
          content={Label.HitingIntroduce}
        />
      </AnimatedContainer>
    </Layout>
  );
};

export default ActivityPage;
