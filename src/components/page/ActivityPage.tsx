import Label from "../ui/Label";
import Layout from "../templates/PageTemplate";
import styled, { keyframes } from "styled-components";
import ColoredGridView from "../organisms/colored_grid_view/ColoredGridView";
import HiarcActivityTop from "@/constants/data/hiarc_activity/hiarc_activity_grid_data/HiarcActivityTop";
import HiarcActivityBottom from "@/constants/data/hiarc_activity/hiarc_activity_grid_data/HiarcActivityBottom";
import ActivitySection from "../organisms/ActivitySection";

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

interface AnimatedContainerProps {
  delay?: string;
}

const AnimatedContainer = styled.div<AnimatedContainerProps>`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
`;

const ActivityPage: React.FC = () => {
  return (
    <Layout align="top">
      <AnimatedContainer delay="0s">
        <ColoredGridView
          colCount={12}
          rowCount={4}
          bottomLayerGridData={HiarcActivityBottom}
          topLayerGridData={HiarcActivityTop}
        />
      </AnimatedContainer>

      <AnimatedContainer delay="0.5s">
        <ActivitySection
          title="HI-CONNECT"
          tagList={["개인 프로젝트", "팀 프로젝트"]}
          content={Label.HiconnectIntroduce}
        />
      </AnimatedContainer>

      <AnimatedContainer delay="1s">
        <ActivitySection
          title="ICPC"
          tagList={["국제 대학생 프로그래밍 대회", "예선"]}
          content={Label.ICPCIntroduce}
        />
      </AnimatedContainer>

      <AnimatedContainer delay="1.5s">
        <ActivitySection
          title="하이팅"
          tagList={["hi-arc.quest/home"]}
          content={Label.HitingIntroduce}
        />
      </AnimatedContainer>
    </Layout>
  );
};

export default ActivityPage;
