import React from "react";
import styled from "styled-components";
import CurvedCornerType from "../../../enum/CurevedCornerType";
import Color from "../../ui/Color";

// 사각형 배경 스타일 (가장 아래에 위치)
const BackgroundRectangleStyle = styled.div`
  background-color: ${(props) => props.backgroundColor || "white"};
  border-radius: 10%;
  width: ${(props) => (props.isHovered ? "95%" : "0%")};  /* hover 시 크기 증가 */
  height: ${(props) => (props.isHovered ? "95%" : "0%")};
  position: absolute;
  bottom: 1px; /* 왼쪽 아래에서 커지기 시작 */
  left: 0;
  transform-origin: bottom left; /* 왼쪽 아래에서 시작 */
  transition: transform 0.5s ease, width 0.5s ease, height 0.5s ease;
  /* hover 상태 및 sequence에 따른 delay 설정 */
  transition-delay: ${(props) => {
    if (props.isHovered) {
      return props.sequence === 1 ? "0ms" : props.delay ? "500ms" : "0ms";
    } else {
      return props.sequence === 1 ? "500ms" : "0ms";
    }
  }};
  z-index: -1; /* 가장 아래에 배치 */
`;

const CellBackgroundStyle = styled.div`
  background-color: ${(props) => props.color || "lightgray"};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  overflow: hidden; /* 곡선이 그리드 아이템을 벗어나지 않도록 */
  transform: ${(props) => `rotate(${props.rotate}deg)`}; /* 회전 적용 */
  z-index: 0; /* 겹치는 컨테이너 중 가장 위에 위치 */
`;

const CurvedCornerStyle = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color || "transparent"};
  transform: rotate(180deg);
  z-index: 1; /* 곡선은 그리드 아이템 위에 위치 */
  
  ${(props) => props.position === "topLeft" && `
    top: 0;
    left: 0;
    border-top-left-radius: 100%;
    background-color: ${props.color};
  `}
  
  ${(props) => props.position === "bottomRight" && `
    bottom: 0;
    right: 0;
    border-bottom-right-radius: 100%;
    background-color: ${props.color};
  `}
`;

const CurvedCornerCell = ({
  index,
  backgroundColor,
  cellSize,
  curveSize,
  color,
  type,
  isHovered,
  delay = false,
  sequence
}) => {
  // type에 따른 회전 값 설정
  const getRotation = (type) => {
    switch (type) {
      case CurvedCornerType.TOP_RIGHT:
        return 0;
      case CurvedCornerType.BOTTOM_RIGHT:
        return 90;
      case CurvedCornerType.BOTTOM_LEFT:
        return 180;
      case CurvedCornerType.TOP_LEFT:
        return 270;
      default:
        return 0;
    }
  };

  const rotation = getRotation(type);

  return (
    <CellBackgroundStyle
      key={index}
      size={cellSize}
      color={Color.transparent}
      rotate={rotation}
    >
      <BackgroundRectangleStyle
        backgroundColor={backgroundColor}
        isHovered={isHovered}
        delay={delay}
        sequence={sequence}
      />
      <CurvedCornerStyle size={curveSize} color={color} position={"topLeft"} />
      <CurvedCornerStyle size={curveSize} color={color} position={"bottomRight"} />
    </CellBackgroundStyle>
  );
};

export default CurvedCornerCell;