import React from "react";
import styled from "styled-components";
import CurvedCornerType from "../../../enum/CurevedCornerType";
import Color from "../../ui/Color";

interface CurvedCornerCellProps {
  backgroundColor: string;
  cellSize: number;
  curveSize: number;
  color: string;
  type: string;
  isHovered: boolean;
  delay?: boolean;
  sequence?: number;
}

const BackgroundRectangleStyle = styled.div<{
  backgroundColor: string;
  $isHovered: boolean;
  delay: boolean;
  sequence?: number;
}>`
  background-color: ${(props) => props.backgroundColor || "white"};
  border-radius: 10%;
  width: ${(props) => (props.$isHovered ? "97%" : "0%")};
  height: ${(props) => (props.$isHovered ? "97%" : "0%")};
  position: absolute;
  bottom: 1px;
  left: 1px;
  transform-origin: bottom left;
  transition:
    transform 0.5s ease,
    width 0.5s ease,
    height 0.5s ease;
  transition-delay: ${(props) => {
    if (props.$isHovered) {
      return props.sequence === 1 ? "0ms" : props.delay ? "500ms" : "0ms";
    } else {
      return props.sequence === 1 ? "500ms" : "0ms";
    }
  }};
  z-index: -1;
`;

const CellBackgroundStyle = styled.div<{
  size: number;
  color: string;
  rotate: number;
}>`
  background-color: ${(props) => props.color || "lightgray"};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform: ${(props) => `rotate(${props.rotate}deg)`};
  z-index: 0;
  pointer-events: none;
`;

const CurvedCornerStyle = styled.div<{
  size: number;
  color: string;
  position: string;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color || "transparent"};
  transform: rotate(180deg);
  z-index: 1;

  ${(props) =>
    props.position === "topLeft" &&
    `
    top: 0;
    left: 0;
    border-top-left-radius: 100%;
    background-color: ${props.color};
  `}

  ${(props) =>
    props.position === "bottomRight" &&
    `
    bottom: 0;
    right: 0;
    border-bottom-right-radius: 100%;
    background-color: ${props.color};
  `}
`;

const CurvedCornerCell: React.FC<CurvedCornerCellProps> = ({
  backgroundColor,
  cellSize,
  curveSize,
  color,
  type,
  isHovered,
  delay = false,
  sequence,
}) => {
  const getRotation = (type: string): number => {
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
      size={cellSize}
      color={Color.transparent}
      rotate={rotation}
    >
      <BackgroundRectangleStyle
        backgroundColor={backgroundColor}
        $isHovered={isHovered}
        delay={delay}
        sequence={sequence}
      />
      <CurvedCornerStyle size={curveSize} color={color} position="topLeft" />
      <CurvedCornerStyle
        size={curveSize}
        color={color}
        position="bottomRight"
      />
    </CellBackgroundStyle>
  );
};

export default CurvedCornerCell;
