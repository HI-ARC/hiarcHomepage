// src/components/ArticleGridItem.tsx
import React from "react";
import CellType from "../../../enum/CellType"; // js 파일, 값으로 사용
import Color from "../../ui/Color";
import CircleContainer from "../../atoms/main_title/CircleContainer";
import NavigateArrow from "../../../assets/icon/navigate_arrow.svg?react";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";
import SectionRoundedRectangleContainer from "@/components/atoms/section_grid_view/SectionRoundedRectangleContainer";

interface ArticleGridItemProps {
  data: TopLayerGridItemData;
  circleSize: number;
  circleSize2X: number;
  circleSize3X: number;
  isHovered: { [key: number]: boolean };
  visibleItems: number[];
}

const ArticleGridItem: React.FC<ArticleGridItemProps> = ({
  data,
  circleSize,
  circleSize2X,
  circleSize3X,
  isHovered,
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
        />
      )}
    </div>
  );
};

export default ArticleGridItem;
