// src/components/CurvedCornerCell.tsx
import React from "react";
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
  // type에 따른 회전 값 설정
  const getRotation = (type: string) => {
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

  // 배경 사각형의 크기 및 전환 딜레이 계산
  const rectWidth = isHovered ? "97%" : "0%";
  const rectHeight = isHovered ? "97%" : "0%";
  let transitionDelay = "0ms";
  if (isHovered) {
    transitionDelay = sequence === 1 ? "0ms" : delay ? "500ms" : "0ms";
  } else {
    transitionDelay = sequence === 1 ? "500ms" : "0ms";
  }

  return (
    <div
      style={{
        width: cellSize,
        height: cellSize,
        transform: `rotate(${rotation}deg)`,
        backgroundColor: Color.transparent, // 컨테이너 배경 (투명)
      }}
      className="relative flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* 확장되는 사각형 (가장 아래 레이어) */}
      <div
        style={{
          backgroundColor: backgroundColor,
          width: rectWidth,
          height: rectHeight,
          transformOrigin: "bottom left",
          transitionProperty: "transform, width, height",
          transitionDuration: "0.5s",
          transitionTimingFunction: "ease",
          transitionDelay: transitionDelay,
        }}
        className="absolute bottom-[1px] left-[1px] rounded-[10%] z-[-1]"
      />
      {/* 왼쪽 상단 곡선 */}
      <div
        style={{
          width: curveSize,
          height: curveSize,
          backgroundColor: color,
          transform: "rotate(180deg)",
        }}
        className="absolute top-0 left-0 rounded-tl-full z-10"
      />
      {/* 오른쪽 하단 곡선 */}
      <div
        style={{
          width: curveSize,
          height: curveSize,
          backgroundColor: color,
          transform: "rotate(180deg)",
        }}
        className="absolute bottom-0 right-0 rounded-br-full z-10"
      />
    </div>
  );
};

export default CurvedCornerCell;
