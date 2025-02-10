import React, { useState } from "react";
import styled from "styled-components";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";

const YearBarList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative; /* 🎯 선(Line)이 원들 뒤에서 배치되도록 설정 */
  padding-bottom: 20px;
`;

// 원들 뒤에 관통하는 선 스타일
const Line = styled.div`
  position: absolute;
  top: 5px;
  width: 100%;
  max-width: 1000px;
  height: 2px;
  background-color: ${Color.primary}; /* 선 색상 */
  z-index: -1; /* 🎯 원들보다 뒤에 배치 */
  transform: translateY(-50%);
`;

const YearBarItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const CircleButton = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background-color: ${(props) =>
    props.selected ? Color.toggledButtonColor : Color.primary};
  z-index: 1; /* 🎯 원들이 선보다 앞으로 오도록 배치 */
`;

const YearText = styled.div`
  ${FontStyle.subhead2Bold}
  color: ${(props) =>
    props.selected ? Color.toggledButtonColor : Color.primary};

  @media (max-width: 500px) {
    ${FontStyle.descriptionBold}
  }
`;

const YearBar = ({ startYear, endYear, onYearSelect }) => {
  const [selectedYear, setSelectedYear] = useState(2017); // 선택된 연도 관리

  // 연도 클릭 시 호출되는 함수
  const handleYearClick = (year) => {
    setSelectedYear(year);
    onYearSelect(year);
  };

  // startYear부터 endYear까지의 연도 배열 생성
  const years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  return (
    <YearBarList>
      <Line /> {/* 🎯 원들 뒤에 배치되는 선 */}
      {years.map((year) => (
        <YearBarItemWrapper key={year}>
          <CircleButton
            selected={selectedYear === year}
            onClick={() => handleYearClick(year)}
          />
          <YearText selected={selectedYear === year}>{year}</YearText>
        </YearBarItemWrapper>
      ))}
    </YearBarList>
  );
};

export default YearBar;
