import React, { useState } from "react";
import "./YearBar.css"; // CSS 파일 연결

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
    <div className="year-bar">
      <div className="line"></div> {/* 수평선 */}
      <div className="years">
        {years.map((year) => (
          <div key={year} className="year-wrapper">
            {/* 각 연도 버튼 */}
            <button
              className={`circle ${selectedYear === year ? "selected" : ""}`}
              onClick={() => handleYearClick(year)}
            />
            <span className="year-label">{year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearBar;
