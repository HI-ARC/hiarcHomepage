import ActivityHeader from "../block/ActivityHeader";
import HiconnectIntro from "../block/HiconnectIntro";
import HitingIntro from "../block/HitingIntro";
import ICPCIntro from "../block/ICPCIntro";
import Layout from "../ui/Layout";
import React from "react";
import styled, {keyframes} from "styled-components";

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
        <HiconnectIntro />
        <ICPCIntro />
      </AnimatedContainer>

      <AnimatedContainer delay="1s">
        <HitingIntro />
      </AnimatedContainer>
    </Layout>
  );
};

export default ActivityPage;
