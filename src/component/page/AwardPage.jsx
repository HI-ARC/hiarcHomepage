import YearBar from "../block/YearBar";
import Layout from "../ui/Layout";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";
import competitionData from "../ui/CompetitionData";
import Competition from "../block/awards_block/Competition";

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
`;

// 🎯 버튼이 텍스트 크기와 패딩만큼만 면적을 가지도록 설정
const ButtonStyle = styled.button`
  display: inline-block; /* 🎯 내용 크기에 맞게 버튼 크기 조정 */
  width: auto; /* 🎯 부모 요소의 영향을 받지 않고, 텍스트 크기만큼 조정 */
  max-width: fit-content; /* 🎯 내용 크기에 맞게 조정 */
  padding: 5px 20px; /* 🎯 패딩 설정 */
  color: ${Color.primary};
  ${FontStyle.display1Bold}
  border-radius: 100px;
  background-color: transparent;
  border: 0.5px solid ${Color.primary};
  text-align: center;
  margin-top: 20px;
  margin-right: auto;
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
    <Layout>
      <Wrapper>
        <YearBar
          startYear={2017}
          endYear={2024}
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
