import React, { useState } from "react";
import styled from "styled-components";

// 연도 바를 담는 컨테이너
const YearBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 800px;
  padding: 20px 0;
`;

// 수평선 스타일
const Line = styled.div`
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #7cbfff;
  z-index: 0;
`;

// 연도 목록
const YearsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

// 각 연도를 감싸는 컨테이너
const YearWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 동그라미 (연도 버튼)
const CircleButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #7cbfff;
  border: none;
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.3s;

  &.selected {
    background-color: #007bff; /* 선택된 동그라미 색상 */
  }
`;

// 연도 텍스트
const YearLabel = styled.span`
  margin-top: 10px;
  font-size: 14px;
  color: #007bff;
`;

const YearBar = ({ startYear, endYear }) => {
  const [selectedYear, setSelectedYear] = useState(null); // 선택된 연도 관리

  // 연도 클릭 시 호출되는 함수
  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  // startYear부터 endYear까지의 연도 배열 생성
  const years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  return (
    <YearBarContainer>
      <Line /> {/* 수평선 */}
      <YearsContainer>
        {years.map((year) => (
          <YearWrapper key={year}>
            {/* 각 연도 버튼 */}
            <CircleButton
              className={selectedYear === year ? "selected" : ""}
              onClick={() => handleYearClick(year)}
            />
            <YearLabel> {year} </YearLabel>
          </YearWrapper>
        ))}
      </YearsContainer>
    </YearBarContainer>
  );
};

export default YearBar;
