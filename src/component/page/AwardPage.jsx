import YearBar from "../block/YearBar";

import Layout from "../ui/Layout";
import {useState} from "react";
import styled from "styled-components";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";
import competitionData from "../ui/CompetitionData";
import Competition from "../block/awards_block/Competition";
import {keyframes} from "styled-components";

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
  const [selectedYear, setSelectedYear] = useState(null);
  const competitions = competitionData[selectedYear] || [];
  const [animate, setAnimate] = useState(false);

  const handleYearSelect = (year) => {
    setAnimate(false);
    setTimeout(() => {
      setSelectedYear(year);
      setAnimate(true);
    }, 0);
  };
  return (
    <Layout>
      <Wrapper>
        <YearBar
          startYear={2017}
          endYear={2024}
          onYearSelect={handleYearSelect}
        ></YearBar>
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
