import styled, { keyframes } from "styled-components";
import Layout from "../ui/Layout";
import TextCircle from "../atom/TextCircle";
import Color from "../ui/Color";
import StudyTableIntro from "../block/StudyTableIntro";
import StudyTable from "../block/StudyTable";
import Data from "../ui/Data";
import StudyHeader from "../block/StudyHeader";
import cppIcon from "../../assets/c++icon.png";
import pythonIcon from "./../../assets/python 3.png";

const StudyPlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const PSTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
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

const SemesterWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const AnimatedContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
  width: 100%;
`;

const Blank = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 30px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const StudyPage = () => {
  return (
    <Layout>
      <StudyHeader />
      <AnimatedContainer delay="0s">
        <SemesterWrapper>
          <StudyPlanWrapper>
            <StudyTableIntro
              isSemester={true}
              semester={"1학기"}
              studyName={"기초 스터디"}
              icon={cppIcon}
            />
            <StudyTable data={Data.studyContent2024_1_1} />
          </StudyPlanWrapper>
          <StudyPlanWrapper>
            <StudyTableIntro
              semester={"2학기"}
              studyName={"초급 스터디"}
              icon={pythonIcon}
            />
            <StudyTable data={Data.studyContent2024_1_2} />
          </StudyPlanWrapper>
        </SemesterWrapper>
      </AnimatedContainer>

      <AnimatedContainer delay="0.5s">
        <SemesterWrapper>
          <StudyPlanWrapper>
            <StudyTableIntro
              isSemester={true}
              semester={"2학기"}
              studyName={"초급 스터디"}
              icon={cppIcon}
            />
            <StudyTable data={Data.studyContent2024_2_1} />
          </StudyPlanWrapper>
          <StudyPlanWrapper>
            <StudyTableIntro studyName={"중급 스터디"} icon={pythonIcon} />
            <StudyTable data={Data.studyContent2024_2_2} />
          </StudyPlanWrapper>
        </SemesterWrapper>
      </AnimatedContainer>

      <AnimatedContainer delay="1s">
        <SemesterWrapper>
          <StudyPlanWrapper>
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
          </StudyPlanWrapper>
          <Blank />
        </SemesterWrapper>
      </AnimatedContainer>
    </Layout>
  );
};

export default StudyPage;
