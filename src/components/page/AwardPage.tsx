import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";
import YearBar from "../organisms/YearBar";
import Layout from "../templates/PageTemplate";
import competitionData from "@/constants/table_data/CompetitionData";
import Competition from "../organisms/CompetitionTable";
import ColoredGridView from "../organisms/ColoredGridView";
import AwardHeaderTopData from "@/constants/data/award/AwardHeaderTopData";
import AnimatedContainer from "../atoms/common/AnimatedContainer";
import CellType from "@/enum/CellType";

const ResponsiveWrapper = styled.div`
  display: flex;
  align-items: flex-start;
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
  padding-top: 30px;
`;

const AwardPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2017);
  const competitions: string[] = competitionData[selectedYear] || [];
  const [animate, setAnimate] = useState<boolean>(true);

  const handleYearSelect = (year: number): void => {
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
        colCount={12}
        topLayerGridData={AwardHeaderTopData}
        bottomLayerGridData={[]}
      />
      <Wrapper>
        <YearBar
          startYear={2017}
          endYear={2025}
          onYearSelect={handleYearSelect}
        />
        {selectedYear && (
          <ColoredGridView
            rowCount={1}
            colCount={12}
            bottomLayerGridData={[]}
            topLayerGridData={[
              {
                position: [1, 1],
                type: CellType.BORDERED_HORIZONTAL_RECTANGLE,
                backgroundColor: Color.yellow,
                contentColor: Color.primary,
                text: `${selectedYear}`,
              },
            ]}
          />
        )}
        <AnimatedContainer delay="0s">
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
