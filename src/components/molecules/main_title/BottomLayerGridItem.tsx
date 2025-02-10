// src/components/BottomLayerGridItem.tsx
import React from "react";
import CurvedCornerCell from "../../atoms/main_title/CurvedCornerCell";
import CellType from "@/enum/CellType";
import Color from "@/components/ui/Color";
import BottomLayerGridItemData from "@/types/BottomLayerGridItemData";

// CellType의 값들을 유니온 타입으로 추출합니다.
export type CellTypeValue = (typeof CellType)[keyof typeof CellType];

interface BottomLayerGridItemProps {
  data: BottomLayerGridItemData;
  itemSize: number;
  cornerCurveSize: number;
  isHovered: { [key: number]: boolean };

  columnSpan?: number;
  rowSpan?: number;
}

const BottomLayerGridItem: React.FC<BottomLayerGridItemProps> = ({
  data,
  itemSize,
  cornerCurveSize,
  isHovered,

  columnSpan = 1,
  rowSpan = 1,
}) => {
  // grid 위치 및 span은 inline style로 적용합니다.
  const gridStyle: React.CSSProperties = {
    gridColumn: data.position[0],
    gridRow: data.position[1],
    gridColumnEnd: `span ${columnSpan}`,
    gridRowEnd: `span ${rowSpan}`,
  };

  return (
    <div
      style={gridStyle}
      className="transition-opacity duration-500 ease-in-out pointer-events-auto"
    >
      {data.type === CellType.CURVE && (
        <CurvedCornerCell
          key={data.index}
          cellSize={itemSize}
          backgroundColor={data.backgroundColor}
          color={Color.background}
          curveSize={cornerCurveSize}
          type={data.direction}
          isHovered={true}
          sequence={undefined}
        />
      )}
      {data.type === CellType.ANIMATE_CURVE && (
        <CurvedCornerCell
          key={data.index}
          cellSize={itemSize}
          backgroundColor={data.backgroundColor}
          color={Color.background}
          curveSize={cornerCurveSize}
          type={data.direction}
          isHovered={isHovered[data.index!]}
          sequence={undefined}
        />
      )}
      {data.type === CellType.ANIMATE_CURVE_WITH_DELAY && (
        <CurvedCornerCell
          key={data.index}
          cellSize={itemSize}
          backgroundColor={data.backgroundColor}
          color={Color.background}
          curveSize={cornerCurveSize}
          type={data.direction}
          isHovered={isHovered[data.index!]}
          delay={true}
          sequence={data.sequence}
        />
      )}
    </div>
  );
};

export default BottomLayerGridItem;
