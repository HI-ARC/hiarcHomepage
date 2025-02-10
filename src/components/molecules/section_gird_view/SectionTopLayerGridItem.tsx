// src/components/SectionTopGridItem.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import CellType from "../../../enum/CellType"; // js 파일, 값으로 사용
import Color from "../../ui/Color";
import CircleContainer from "../../atoms/main_title/CircleContainer";
import MenuButton from "../../atoms/main_title/MenuButton";
import NavigateArrow from "../../../assets/icon/navigate_arrow.svg?react";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";
import SectionRoundedRectangleContainer from "@/components/atoms/section_grid_view/SectionRoundedRectangleContainer";

interface SectionTopGridItemProps {
  data: TopLayerGridItemData;
  circleSize: number;
  circleSize2X: number;
  circleSize3X: number;
  isHovered: { [key: number]: boolean };
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: (index: number) => void;
  visibleItems: number[];
}

const SectionTopGridItem: React.FC<SectionTopGridItemProps> = ({
  data,
  circleSize,
  circleSize2X,
  circleSize3X,
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
  visibleItems,
}) => {
  // data.delay가 있으면 visibleItems에 포함되어야 보이도록 처리합니다.
  const isVisible = data.delay ? visibleItems.includes(data.delay) : true;

  // 그리드 배치와 관련된 스타일 (column, row, span, opacity)
  const gridStyle: React.CSSProperties = {
    gridColumn: data.position[0],
    gridRow: data.position[1],
    gridColumnEnd: `span 1`, // columnSpan 기본값 1
    gridRowEnd: `span 1`, // rowSpan 기본값 1
    opacity: isVisible ? 1 : 0,
  };

  // 클릭 시 항상 https://icpc-sinchon.github.io/ 로 이동합니다.
  const handleNavigation = () => {
    window.location.href = "https://icpc-sinchon.github.io/";
  };

  return (
    <div
      style={gridStyle}
      className="transition-opacity duration-500 ease-in-out"
    >
      {data.type === CellType.CIRCLE && (
        <CircleContainer
          color={data.color}
          size={circleSize}
          children={undefined}
        />
      )}

      {data.type === CellType.CIRCLE_WITH_TEXT && (
        <CircleContainer color={data.color} size={circleSize}>
          {data.text}
        </CircleContainer>
      )}

      {data.type === CellType.CIRCLE_WITH_ICON && (
        <CircleContainer
          color={data.color}
          size={circleSize}
          isHovered={isHovered[data.index!]}
          animate={true}
          contentColor={Color.white}
        >
          <NavigateArrow width="30px" height="30px" />
        </CircleContainer>
      )}

      {data.type === CellType.HORIZONTAL_RECTANGLE && (
        <SectionRoundedRectangleContainer
          color={data.color}
          height={circleSize}
          width={circleSize2X}
          textColor={data.color === Color.yellow ? Color.primary : Color.white}
          text={data.text ?? ""}
        />
      )}

      {data.type === CellType.LONG_HORIZONTAL_RECTANGLE && (
        <SectionRoundedRectangleContainer
          color={data.color}
          height={circleSize}
          width={circleSize3X}
          text={data.text as string}
          textColor={data.color === Color.yellow ? Color.primary : Color.white}
          isButton={true}
          onClick={handleNavigation}
        />
      )}

      {data.type === CellType.VERTICAL_RECTANGLE && (
        <SectionRoundedRectangleContainer
          color={data.color}
          height={circleSize2X}
          width={circleSize}
          text={""}
        />
      )}

      {data.type === CellType.BUTTON && (
        <MenuButton
          buttonText={data.buttonText || ""}
          color={data.color}
          height={circleSize}
          width={circleSize2X}
          onMouseEnter={() => handleMouseEnter(data.index!)}
          onMouseLeave={() => handleMouseLeave(data.index!)}
          onClick={handleNavigation}
        />
      )}

      {data.type === CellType.TEXT && (
        <div
          className="flex text-start"
          style={{
            color: Color.primary,
            fontFamily: "NanumSquareNeoHeavy",
            fontWeight: 800,
            lineHeight: 0.92,
            fontSize: "clamp(0rem, calc((100vw - 60px) * 0.158), 16rem)",
          }}
        >
          HI- ARC
        </div>
      )}
    </div>
  );
};

export default SectionTopGridItem;
