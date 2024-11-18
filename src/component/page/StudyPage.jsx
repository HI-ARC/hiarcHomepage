import styled, { keyframes } from "styled-components";
import Layout from "../ui/Layout";
import TextCircle from "../atom/TextCircle";
import Color from "../ui/Color";
import StudyTableIntro from "../block/StudyTableIntro";
import StudyTable from "../block/StudyTable";
import Data from "../ui/Data";
import StudyHeader from "../block/StudyHeader";

const StudyPlanWrapper = styled.div`
  display: flex;
`;

const PSTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
`;

const PSWrapper = styled.div`
  margin-right: 370px;
`;

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

const StudyPage = () => {
  return <Layout></Layout>;
};

export default StudyPage;
