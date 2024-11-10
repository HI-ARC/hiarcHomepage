import styled, { keyframes } from "styled-components";
import StudyPlan from "../block/StudyPlan";
import StudyTable2024_1 from "../block/StudyTable2024_1";
import Layout from "../ui/Layout";
import TextCircle from "../atom/TextCircle";
import Color from "../ui/Color";

const StudyPlanWrapper = styled.div`
  display: flex;
`;

const PSTitleWrapper = styled.div`
  display: flex;

  justify-content: center;
  padding-right: 45%;
`;

const PSWrapper = styled.div`
  margin-right: 100%;
`;

const TableWrapper = styled.div`
  padding-right: 30%;
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
        <StudyTable2024_1
          semester={"1학기"}
          studyName1={"기초 스터디"}
          studyName2={"초급 스터디"}
        />
        <StudyPlanWrapper>
          <StudyPlan />
          <StudyPlan />
        </StudyPlanWrapper>
      </AnimatedContainer>

      <AnimatedContainer delay="0.5s">
        <StudyTable2024_1
          semester={"2학기"}
          studyName1={"초급 스터디"}
          studyName2={"중급 스터디"}
        />
        <StudyPlanWrapper>
          <StudyPlan />
          <StudyPlan />
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
          <TableWrapper>
            <StudyPlan />
          </TableWrapper>
        </PSWrapper>
      </AnimatedContainer>
    </Layout>
  );
};

export default StudyPage;
