import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BottomLayerGridItem from "@/components/molecules/colored_grid_view/BottomLayerGridItem";
import TopLayerGridItem from "@/components/molecules/colored_grid_view/TopLayerGridItem";
import BottomLayerGridItemData from "@/types/BottomLayerGridItemData";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";

const LayeredContainer = styled.div<{ width: number; height: number }>`
  display: flex;
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const GridContainer = styled.div<{
  size?: number;
  padding?: number;
  rowCount: number;
  colCount: number;
  gap?: number;
}>`
  position: absolute;
  display: grid;
  grid-template-columns: ${({ colCount, size }) =>
    `repeat(${colCount - 1}, ${size}px)`};
  grid-template-rows: ${({ rowCount, size }) =>
    `repeat(${rowCount - 1}, ${size}px)`};
  top: ${({ padding }) => padding}px;
  left: ${({ padding }) => padding}px;
  gap: ${({ gap }) => (gap ? `${gap}px` : "0")};
  width: 100%;
  height: 100%;
`;

interface ColoredGridViewProps {
  width?: number | null;
  maxWidth?: number | null;
  minWidth?: number | null;
  rowCount: number;
  colCount: number;
  bottomLayerGridData: BottomLayerGridItemData[];
  topLayerGridData: TopLayerGridItemData[];
}

const ColoredGridView: React.FC<ColoredGridViewProps> = ({
  width,
  maxWidth,
  minWidth,
  rowCount,
  colCount,
  bottomLayerGridData,
  topLayerGridData,
}) => {
  const remToPx = (rem: number) =>
    rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

  const getDynamicWidth = () => {
    const remValue = remToPx(6.0);
    const maxWidthValue = maxWidth !== undefined ? maxWidth! : 1000;
    const minWidthValue = minWidth !== undefined ? minWidth! : 200;

    if (
      maxWidth !== undefined &&
      minWidth !== undefined &&
      window.innerWidth < 1000
    ) {
      return (
        minWidthValue +
        (maxWidthValue - minWidthValue) * (window.innerWidth / 1000)
      );
    }

    return Math.min(
      maxWidthValue,
      Math.max(minWidthValue, window.innerWidth - remValue)
    );
  };

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

  const finalWidth =
    width !== null && width !== undefined ? width : dynamicWidth;

  const ratioOffset = (colCount - 1) * 28 + colCount * 100;
  const circleRadius = (50 / ratioOffset) * finalWidth;
  const gapSize = (28 / ratioOffset) * finalWidth;
  const itemSize = circleRadius * 2 + gapSize;
  const cornerCurveSize = circleRadius + gapSize;
  const circleSize = circleRadius * 2;
  const circleSize2X = circleSize * 2 + gapSize;
  const circleSize3X = circleSize * 3 + gapSize * 2;
  const circleSize4X = circleSize * 4 + gapSize * 3;
  const paddingSize = circleRadius;
  const containerHeight =
    rowCount * circleRadius * 2 + (rowCount - 1) * gapSize;

  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState<boolean[]>(Array(4).fill(false));

  useEffect(() => {
    topLayerGridData.forEach((data) => {
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

  console.log("containerHeight", containerHeight);

  return (
    <LayeredContainer width={finalWidth} height={containerHeight}>
      <GridContainer
        padding={paddingSize}
        size={itemSize}
        rowCount={rowCount}
        colCount={colCount}
      >
        {bottomLayerGridData.map((data, index) => (
          <BottomLayerGridItem
            key={index}
            data={data}
            itemSize={itemSize}
            cornerCurveSize={cornerCurveSize}
            isHovered={isHovered}
          />
        ))}
      </GridContainer>
      <GridContainer
        size={circleSize}
        gap={gapSize}
        rowCount={rowCount}
        colCount={colCount}
      >
        {topLayerGridData.map((data, index) => (
          <TopLayerGridItem
            key={index}
            data={data}
            circleSize={circleSize}
            circleSize2X={circleSize2X}
            circleSize3X={circleSize3X}
            circleSize4X={circleSize4X}
            isHovered={isHovered}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            visibleItems={visibleItems}
          />
        ))}
      </GridContainer>
    </LayeredContainer>
  );
};

export default ColoredGridView;
