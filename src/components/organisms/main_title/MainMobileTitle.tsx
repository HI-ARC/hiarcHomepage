import React, { useState, useEffect } from "react";
import BottomLayerGridItem from "../../molecules/main_title/BottomLayerGridItem";
import TopLayerGridItem from "../../molecules/main_title/TopLayerGridItem";
import TopLayerGridData from "@/constants/data/main_title/TopLayerGridData";
import BottomLayerGridData from "@/constants/data/main_title/BottomLayerGridData";
import MobileTopLayerGridData from "@/constants/data/main_mobile_title/MobileTopLayerGridData";
import MobileBottomLayerGridData from "@/constants/data/main_mobile_title/MobileBottomLayerGridData";
import MobileTopLayerGridItem from "@/components/molecules/main_title/MobileTopLayerGridItem";

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
  children: React.ReactNode;
}
const GridContainer1: React.FC<GridContainer1Props> = ({
  size,
  padding,
  children,
}) => (
  <div
    className="grid absolute items-start"
    style={{
      gridTemplateColumns: `repeat(5, ${size}px)`,
      gridTemplateRows: `repeat(9, ${size}px)`,
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
  children: React.ReactNode;
}
const GridContainer2: React.FC<GridContainer2Props> = ({
  cellSize,
  gap,
  children,
}) => (
  <div
    className="grid absolute top-0 left-0 w-full h-full"
    style={{
      gridTemplateColumns: `repeat(6, ${cellSize}px)`,
      gridTemplateRows: `repeat(10, ${cellSize}px)`,
      gap: `${gap}px`,
    }}
  >
    {children}
  </div>
);

// ──────────────────────────────────────────────
// MainMobileTitle 컴포넌트
// ──────────────────────────────────────────────

interface MainMobileTitleProps {
  width?: number | null;
}

const MainMobileTitle: React.FC<MainMobileTitleProps> = ({ width }) => {
  // rem 단위를 px로 변환하는 함수
  const remToPx = (rem: number) => {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  // 동적 너비 계산 함수
  const getDynamicWidth = () => {
    const remValue = remToPx(6.0);
    return Math.min(1000, Math.max(200, window.innerWidth - remValue));
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
  const itemSize = (128 / 740) * finalWidth;
  const cornerCurveSize = (78 / 740) * finalWidth;
  const circleSize = (100 / 740) * finalWidth;
  const circleSize2X = (228 / 740) * finalWidth;
  const circleSize3X = (356 / 740) * finalWidth;
  const paddingSize = (50 / 740) * finalWidth;
  const gapSize = (28 / 740) * finalWidth;
  const containerHeight = (1252 / 740) * finalWidth;

  // 상태: visibleItems와 isHovered
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    // TopLayerGridData에 delay 값이 있는 항목에 대해 visibleItems 상태 업데이트
    MobileTopLayerGridData.forEach((data) => {
      if (data.delay) {
        setTimeout(() => {
          if (data.delay !== undefined) {
            setVisibleItems((prev) => [...prev, data.delay!]);
          }
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

  return (
    <LayeredContainer width={finalWidth} height={containerHeight}>
      <GridContainer1 padding={paddingSize} size={itemSize}>
        {MobileBottomLayerGridData.map((data, index) => (
          <BottomLayerGridItem
            key={index}
            data={data}
            itemSize={itemSize}
            cornerCurveSize={cornerCurveSize}
            isHovered={isHovered}
          />
        ))}
      </GridContainer1>
      <GridContainer2 cellSize={circleSize} gap={gapSize}>
        {MobileTopLayerGridData.map((data, index) => (
          <MobileTopLayerGridItem
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
  );
};

export default MainMobileTitle;
