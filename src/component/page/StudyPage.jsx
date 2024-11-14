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
  return (
    <Layout>
      <AnimatedContainer delay="0s">
        <StudyHeader />
        <StudyTableIntro
          semester={"1학기"}
          studyName1={"기초 스터디"}
          studyName2={"초급 스터디"}
        />
        <StudyPlanWrapper>
          <StudyTable data={Data.studyContent2024_1_1} />
          <StudyTable data={Data.studyContent2024_1_2} />
        </StudyPlanWrapper>
      </AnimatedContainer>

      <AnimatedContainer delay="0.5s">
        <StudyTableIntro
          semester={"2학기"}
          studyName1={"초급 스터디"}
          studyName2={"중급 스터디"}
        />
        <StudyPlanWrapper>
          <StudyTable data={Data.studyContent2024_2_1} />
          <StudyTable data={Data.studyContent2024_2_2} />
        </StudyPlanWrapper>
      </AnimatedContainer>

      <AnimatedContainer delay="1s">
        <PSWrapper>
          <PSTitleWrapper>
            <TextCircle
              text={"PS사용설명서"}
              color={Color.orange}
              backgroundColor={Color.background}
              border={"1px solid"}
              padding="12px 30px"
            />
          </PSTitleWrapper>
          <StudyTable data={Data.studyContent2024_2_3} />
        </PSWrapper>
      </AnimatedContainer>
    </Layout>
  );
};

export default StudyPage;
