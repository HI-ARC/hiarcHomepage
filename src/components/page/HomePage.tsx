import Layout from "../templates/PageTemplate";
import TopLayerGridData from "@/constants/data/main_title/TopLayerGridData";
import BottomLayerGridData from "@/constants/data/main_title/BottomLayerGridData";
import MobileBottomLayerGridData from "@/constants/data/main_mobile_title/MobileBottomLayerGridData";
import MobileTopLayerGridData from "@/constants/data/main_mobile_title/MobileTopLayerGridData";
import styled from "styled-components";
import ColoredGridView from "../organisms/colored_grid_view/ColoredGridView";

const DesktopContainer = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  @media (min-width: 641px) {
    display: none;
  }
`;

const HomePage = () => {
  return (
    <Layout>
      <MobileContainer>
        <ColoredGridView
          rowCount={10}
          colCount={6}
          bottomLayerGridData={MobileBottomLayerGridData}
          topLayerGridData={MobileTopLayerGridData}
        />
      </MobileContainer>
      <DesktopContainer>
        <ColoredGridView
          rowCount={6}
          colCount={10}
          bottomLayerGridData={BottomLayerGridData}
          topLayerGridData={TopLayerGridData}
        />
      </DesktopContainer>
    </Layout>
  );
};

export default HomePage;
