import YearBar from "../block/YearBar";
import AwardsBlock from "../block/awards_block/AwardsBlock";
import Layout from "../ui/Layout";
import { useState } from "react";
import styled from "styled-components";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";

const ResponsiveWrapper = styled.div`
  display: flex;
  align-items: flex-start; /* 왼쪽 정렬 */
  justify-content: space-between;
  width: 100%; /* 전체 너비 */
  padding: 20px;
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
  border-radius: 20px;
  padding: 5px;
  background-color: transparent;
  border: 1px solid ${Color.primary};
  width: 20%;
  min-width: 100px;
`;

const AwardPage = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
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
          <AwardsBlock year={selectedYear}></AwardsBlock>
        </ResponsiveWrapper>
      </Wrapper>
    </Layout>
  );
};
};

export default AwardPage;

