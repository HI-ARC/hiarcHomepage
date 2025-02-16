import styled from "styled-components";
import Layout from "../templates/PageTemplate";
import StudyTable from "../blocks/StudyTable";
import Data from "../ui/Data";
import ColoredGridView from "../organisms/colored_grid_view/ColoredGridView";
import Study2024HeaderBottomData from "@/constants/data/study/study_2024_grid_data/Study2024HeaderBottomData";
import Study2024HeaderTopData from "@/constants/data/study/study_2024_grid_data/Study2024HeaderTopData";
import Study2025HeaderBottomData from "@/constants/data/study/stduy_2025_grid_data/Study2025HeaderBottomData";
import Study2025HeaderTopData from "@/constants/data/study/stduy_2025_grid_data/Study2025HeaderTopData";

import BasicStudy2025HeaderTopData from "@/constants/data/study/stduy_2025_grid_data/mobile/BasicStudy2025HeaderTopData";
import ElementaryStudy2025HeaderTopData from "@/constants/data/study/stduy_2025_grid_data/mobile/ElementaryStudy2025HeaderTopData";
import AnimatedContainer from "../atoms/\bAnimatedContainer";
import BasicStudy2024HeaderTopData from "@/constants/data/study/study_2024_grid_data/mobile/BasicStudy2024HeaderTopData";
import PsManualTopData from "@/constants/data/study/PsManualTopData";

const StudyPlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;

  @media (max-width: 480px) {
    width: 100%;
    display: block;
  }
`;

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

const SemesterWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  padding-bottom: 100px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const Blank = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 30px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const StudyPage: React.FC = () => {
  return (
    <Layout align="top">
      <DesktopOnly>
        <AnimatedContainer delay="0s">
          <ColoredGridView
            rowCount={2}
            colCount={12}
            bottomLayerGridData={Study2025HeaderBottomData}
            topLayerGridData={Study2025HeaderTopData}
          />
        </AnimatedContainer>
      </DesktopOnly>

      <AnimatedContainer delay="0s">
        <SemesterWrapper>
          <StudyPlanWrapper>
            <MobileOnly>
              <ColoredGridView
                rowCount={2}
                colCount={8}
                bottomLayerGridData={[]}
                topLayerGridData={BasicStudy2025HeaderTopData}
              />
            </MobileOnly>
            <StudyTable data={Data.studyContent2024_1_1} />
          </StudyPlanWrapper>
          <StudyPlanWrapper>
            <MobileOnly>
              <ColoredGridView
                rowCount={1}
                colCount={8}
                bottomLayerGridData={[]}
                topLayerGridData={ElementaryStudy2025HeaderTopData}
              />
            </MobileOnly>
            <StudyTable data={Data.studyContent2024_1_2} />
          </StudyPlanWrapper>
        </SemesterWrapper>
      </AnimatedContainer>

      <DesktopOnly>
        <AnimatedContainer delay="0.5s">
          <ColoredGridView
            rowCount={2}
            colCount={12}
            bottomLayerGridData={Study2024HeaderBottomData}
            topLayerGridData={Study2024HeaderTopData}
          />
        </AnimatedContainer>
      </DesktopOnly>
      <AnimatedContainer delay="0.5s">
        <SemesterWrapper>
          <StudyPlanWrapper>
            <MobileOnly>
              <ColoredGridView
                rowCount={2}
                colCount={8}
                bottomLayerGridData={[]}
                topLayerGridData={BasicStudy2024HeaderTopData}
              />
            </MobileOnly>
            <StudyTable data={Data.studyContent2024_2_1} />
          </StudyPlanWrapper>
          <StudyPlanWrapper>
            <MobileOnly>
              <ColoredGridView
                rowCount={1}
                colCount={8}
                bottomLayerGridData={[]}
                topLayerGridData={ElementaryStudy2025HeaderTopData}
              />
            </MobileOnly>
            <StudyTable data={Data.studyContent2024_2_2} />
          </StudyPlanWrapper>
        </SemesterWrapper>
      </AnimatedContainer>

      <AnimatedContainer delay="1s">
        <DesktopOnly>
          <ColoredGridView
            rowCount={1}
            colCount={12}
            bottomLayerGridData={[]}
            topLayerGridData={PsManualTopData}
          />
        </DesktopOnly>
      </AnimatedContainer>
      <AnimatedContainer delay="1s">
        <SemesterWrapper>
          <StudyPlanWrapper>
            <MobileOnly>
              <ColoredGridView
                rowCount={1}
                colCount={8}
                bottomLayerGridData={[]}
                topLayerGridData={PsManualTopData}
              />
            </MobileOnly>
            <StudyTable data={Data.studyContent2024_2_3} />
          </StudyPlanWrapper>
          <Blank />
        </SemesterWrapper>
      </AnimatedContainer>
    </Layout>
  );
};

export default StudyPage;
