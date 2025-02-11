import React, { useState, useEffect } from "react";
import BottomLayerGridItem from "../../molecules/main_title/BottomLayerGridItem";
import TopLayerGridItem from "../../molecules/main_title/TopLayerGridItem";
import BottomLayerGridItemData from "@/types/BottomLayerGridItemData";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";
import SectionTopGridItem from "@/components/molecules/section_gird_view/SectionTopLayerGridItem";
import ArticleGridItem from "@/components/molecules/articel_header/ArticleGridItem";

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
// ArticleHeader 컴포넌트
// ──────────────────────────────────────────────

interface ArticleHeaderProps {
  width?: number | null;
  rowCount: number;
  colCount: number;
  bottomLayerData: BottomLayerGridItemData[];
  topLayerData: TopLayerGridItemData[];
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
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
  const itemSize = (102 / 1248) * finalWidth;
  const cornerCurveSize = (74 / 1248) * finalWidth;
  const circleSize = (82 / 1248) * finalWidth;
  const circleSize2X = (186 / 1248) * finalWidth;
  const circleSize3X = (318 / 1248) * finalWidth;
  const paddingSize = (41 / 1248) * finalWidth;
  const gapSize = (24 / 1248) * finalWidth;
  const containerHeight =
    ((rowCount * 82 + (rowCount - 1) * 24) / 1248) * finalWidth;

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
            <ArticleGridItem
              key={index}
              data={data}
              circleSize={circleSize}
              circleSize2X={circleSize2X}
              circleSize3X={circleSize3X}
              isHovered={isHovered}
              visibleItems={visibleItems}
            />
          ))}
        </GridContainer2>
      </LayeredContainer>
    </div>
  );
};

export default ArticleHeader;
