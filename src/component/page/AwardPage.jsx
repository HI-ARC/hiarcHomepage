import YearBar from "../block/YearBar";

import Layout from "../ui/Layout";
import { useState } from "react";
import styled from "styled-components";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";
import competitionData from "../ui/CompetitionData";
import Competition from "../block/awards_block/Competition";

const ResponsiveWrapper = styled.div`
  display: flex;
  align-items: flex-start; /* 왼쪽 정렬 */
  justify-content: space-between;
  width: 100%; /* 전체 너비 */
  padding: 20px;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  max-width: 800px; /* 최대 너비 설정 */
`;
const ButtonStyle = styled.button`
  color: ${Color.primary};
  ${FontStyle.display1Bold}
  border-radius: 41px;
  padding: 5px;
  background-color: transparent;
  border: 0.5px solid ${Color.primary};
  width: 15%;
  min-width: 100px;
  margin-left: 3%;
`;

const AwardPage = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const competitions = competitionData[selectedYear] || [];
  return (
    <Layout>
      <Wrapper>
        <YearBar
          startYear={2017}
          endYear={2024}
          onYearSelect={setSelectedYear}
        ></YearBar>
        <ButtonStyle>{selectedYear}</ButtonStyle>
        <ResponsiveWrapper>
          {competitions.map((name, index) => (
            <Competition key={index} competitionName={name} />
          ))}
        </ResponsiveWrapper>
      </Wrapper>
    </Layout>
  );
};

export default AwardPage;
