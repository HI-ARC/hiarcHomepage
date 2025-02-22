import Label from "../ui/Label";
import Layout from "../templates/PageTemplate";
import styled from "styled-components";
import ColoredGridView from "../organisms/ColoredGridView";
import HiarcActivityTop from "@/constants/data/hiarc_activity/hiarc_activity_grid_data/HiarcActivityTop";
import HiarcActivityBottom from "@/constants/data/hiarc_activity/hiarc_activity_grid_data/HiarcActivityBottom";
import ActivitySection from "../organisms/ActivitySection";
import AnimatedContainer from "../atoms/common/AnimatedContainer";
import MobileHiarcActivityTop from "@/constants/data/hiarc_activity/hiarc_activity_grid_data/mobile/MobileHiarcActivityTop";
import MobileHiarcActivityBottom from "@/constants/data/hiarc_activity/hiarc_activity_grid_data/mobile/MobileHiarcActivityBottom";

const DesktopOnly = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileOnly = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
  }
`;

const ActivityPage: React.FC = () => {
  return (
    <Layout align="top">
      <AnimatedContainer delay="0s">
        <DesktopOnly>
          <ColoredGridView
            colCount={12}
            rowCount={4}
            bottomLayerGridData={HiarcActivityBottom}
            topLayerGridData={HiarcActivityTop}
          />
        </DesktopOnly>
        <MobileOnly>
          <ColoredGridView
            colCount={6}
            rowCount={10}
            bottomLayerGridData={MobileHiarcActivityBottom}
            topLayerGridData={MobileHiarcActivityTop}
          />
        </MobileOnly>
      </AnimatedContainer>

      <AnimatedContainer delay="0.5s">
        <ActivitySection
          title="HI-CONNECT"
          tagList={["OB 선배들과의 만남"]}
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
