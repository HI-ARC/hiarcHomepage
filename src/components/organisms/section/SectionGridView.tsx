import React, { useState, useEffect } from "react";
import BottomLayerGridItem from "@/components/molecules/colored_grid_view/BottomLayerGridItem";
import TopLayerGridItem from "@/components/molecules/colored_grid_view/TopLayerGridItem";
import BottomLayerGridItemData from "@/types/BottomLayerGridItemData";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";
import SectionTopGridItem from "@/components/molecules/section_gird_view/SectionTopLayerGridItem";

// ──────────────────────────────────────────────
// 분리된 컨테이너 컴포넌트들
// ──────────────────────────────────────────────

interface LayeredContainerProps {
  width: number;
  height: number;
  children: React.ReactNode;
}
const LayeredContainer: React.FC<LayeredContainerProps> = ({
  width,
  height,
  children,
}) => (
  <div
    className="relative"
    style={{ width: `${width}px`, height: `${height}px` }}
  >
    {children}
  </div>
);

interface GridContainer1Props {
  size: number;
  padding: number;
  colCount: number;
  rowCount: number;
  children: React.ReactNode;
}
const GridContainer1: React.FC<GridContainer1Props> = ({
  size,
  padding,
  colCount,
  rowCount,
  children,
}) => (
  <div
    className="grid absolute items-start"
    style={{
      gridTemplateColumns: `repeat(${colCount - 1}, ${size}px)`,
      gridTemplateRows: `repeat(${rowCount - 1}, ${size}px)`,
      top: `${padding}px`,
      left: `${padding}px`,
    }}
  >
    {children}
  </div>
);

interface GridContainer2Props {
  cellSize: number;
  gap: number;
  colCount: number;
  rowCount: number;
  children: React.ReactNode;
}
const GridContainer2: React.FC<GridContainer2Props> = ({
  cellSize,
  gap,
  colCount,
  rowCount,
  children,
}) => (
  <div
    className="grid absolute top-0 left-0 w-full h-full"
    style={{
      gridTemplateColumns: `repeat(${colCount}, ${cellSize}px)`,
      gridTemplateRows: `repeat(${rowCount}, ${cellSize}px)`,
      gap: `${gap}px`,
    }}
  >
    {children}
  </div>
);

// ──────────────────────────────────────────────
// SectionGridView 컴포넌트
// ──────────────────────────────────────────────

interface SectionGridViewProps {
  width?: number | null;
  rowCount: number;
  colCount: number;
  bottomLayerData: BottomLayerGridItemData[];
  topLayerData: TopLayerGridItemData[];
}

const SectionGridView: React.FC<SectionGridViewProps> = ({
  width,
  rowCount,
  colCount,
  bottomLayerData,
  topLayerData,
}) => {
  // rem 단위를 px로 변환하는 함수
  const remToPx = (rem: number) => {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  // 동적 너비 계산 함수
  const getDynamicWidth = () => {
    const remValue = remToPx(6.0);
    return Math.min(800, Math.max(700, window.innerWidth - remValue)); // 최대 800px로 제한
  };

  // 내부에서 관리하는 동적 너비 상태
  const [dynamicWidth, setDynamicWidth] = useState<number>(getDynamicWidth());

  useEffect(() => {
    if (width !== null && width !== undefined) return;

    const handleResize = () => {
      setDynamicWidth(getDynamicWidth());
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  // 실제 사용할 너비 결정
  const finalWidth =
    width !== null && width !== undefined ? width : dynamicWidth;

  // 비율에 따른 사이즈 계산
  const itemSize = (128 / 1252) * finalWidth;
  const cornerCurveSize = (78 / 1252) * finalWidth;
  const circleSize = (100 / 1252) * finalWidth;
  const circleSize2X = (228 / 1252) * finalWidth;
  const circleSize3X = (356 / 1252) * finalWidth;
  const paddingSize = (50 / 1252) * finalWidth;
  const gapSize = (28 / 1252) * finalWidth;
  const containerHeight =
    ((rowCount * 100 + (rowCount - 1) * 28) / 1252) * finalWidth;

  // 상태: visibleItems와 isHovered
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState<boolean[]>(
    Array(topLayerData.length).fill(false)
  );

  useEffect(() => {
    // TopLayerGridData에 delay 값이 있는 항목에 대해 visibleItems 상태 업데이트
    topLayerData.forEach((data) => {
      if (data.delay) {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, data.delay!]);
        }, data.delay * 200);
      }
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    setIsHovered((prev) => {
      const newHovered = [...prev];
      newHovered[index] = true;
      return newHovered;
    });
  };

  const handleMouseLeave = (index: number) => {
    setIsHovered((prev) => {
      const newHovered = [...prev];
      newHovered[index] = false;
      return newHovered;
    });
  };

  console.log(circleSize * colCount + gapSize * (colCount - 1));
  const minWidth = 200;
  const containerWidth = Math.max(
    circleSize * colCount + gapSize * (colCount - 1),
    minWidth
  );

  return (
    <div className="flex">
      <LayeredContainer width={containerWidth} height={containerHeight}>
        <GridContainer1
          padding={paddingSize}
          size={itemSize}
          colCount={colCount}
          rowCount={rowCount}
        >
          {bottomLayerData.map((data, index) => (
            <BottomLayerGridItem
              key={index}
              data={data}
              itemSize={itemSize}
              cornerCurveSize={cornerCurveSize}
              isHovered={isHovered}
            />
          ))}
        </GridContainer1>
        <GridContainer2
          cellSize={circleSize}
          gap={gapSize}
          colCount={colCount}
          rowCount={rowCount}
        >
          {topLayerData.map((data, index) => (
            <SectionTopGridItem
              key={index}
              data={data}
              circleSize={circleSize}
              circleSize2X={circleSize2X}
              circleSize3X={circleSize3X}
              isHovered={isHovered}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              visibleItems={visibleItems}
            />
          ))}
        </GridContainer2>
      </LayeredContainer>
    </div>
  );
};

export default SectionGridView;
