import React from "react";
import styled from "styled-components";

// 버튼 스타일 정의
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* 텍스트와 아이콘 사이 간격 */
  width: 200px;
  height: 50px;
  background-color: #00aaff; /* 버튼 배경색 */
  color: white; /* 텍스트 색상 */
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 40px; /* 둥근 모서리 */
  cursor: pointer;
  outline: none;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8; /* 호버 효과 */
  }
`;

// 아이콘 스타일
const Icon = styled.span`
  width: 24px;
  height: 24px;
  border: 1px solid white; /* 아이콘 원 테두리 */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const SinchonBlueButton = ({text}) => {
  return (
    <a href="https://www.icpc-sinchon.io/" style={{textDecoration: "none"}}>
      <StyledButton>
        {text}
        <Icon>→</Icon>
      </StyledButton>
    </a>
  );
};

export default SinchonBlueButton;
