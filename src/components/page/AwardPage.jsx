import YearBar from "../organisms/YearBar";
import Layout from "../templates/PageTemplate";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";
import competitionData from "../ui/CompetitionData";
import Competition from "../organisms/CompetitionTable";
import ColoredGridView from "../organisms/ColoredGridView";
import AwardHeaderTopData from "@/constants/data/award/AwardHeaderTopData";

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

// 애니메이션이 적용된 래퍼 스타일
const AnimatedContainer = styled.div`
  opacity: 0;
  animation: ${(props) => (props.animate ? fadeIn : "none")} 1s ease-in-out
    forwards;
`;

const ResponsiveWrapper = styled.div`
  display: flex;
  align-items: flex-start; /* 왼쪽 정렬 */
  justify-content: space-between;
  width: 100%;
  padding-top: 30px;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  padding-top: 50px;
`;

// 🎯 버튼이 텍스트 크기와 패딩만큼만 면적을 가지도록 설정
const ButtonStyle = styled.button`
  display: inline-block;
  width: auto;
  max-width: fit-content;
  padding: 5px 20px;
  color: ${Color.primary};
  ${FontStyle.display1Bold}
  border-radius: 100px;
  background-color: transparent;
  border: 0.5px solid ${Color.primary};
  text-align: center;
  margin-top: 20px;
  margin-right: auto;
`;

const DesktopOnly = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

const MobileOnly = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

const AwardPage = () => {
  const [selectedYear, setSelectedYear] = useState(2017);
  const competitions = competitionData[selectedYear] || [];
  const [animate, setAnimate] = useState(true);

  const handleYearSelect = (year) => {
    setAnimate(false);
    setTimeout(() => {
      setSelectedYear(year);
      setAnimate(true);
    }, 0);
  };

  return (
    <Layout align="top">
      <ColoredGridView
        rowCount={1}
        colCount={10}
        topLayerGridData={AwardHeaderTopData}
        bottomLayerGridData={[]}
      />
      <Wrapper>
        <YearBar
          startYear={2017}
          endYear={2025}
          onYearSelect={handleYearSelect}
        />
        {selectedYear && <ButtonStyle>{selectedYear}</ButtonStyle>}
        <AnimatedContainer animate={animate}>
          <ResponsiveWrapper>
            {competitions.map((name, index) => (
              <Competition key={index} competitionName={name} />
            ))}
          </ResponsiveWrapper>
        </AnimatedContainer>
      </Wrapper>
    </Layout>
  );
};

export default AwardPage;
