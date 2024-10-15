import styled from "styled-components";
import Color from "../ui/Color";
import CircleContainer from "../atom/main_title/CircleContainer";
import CurvedCornerCell from "../atom/main_title/CurvedCornerCell";
import CurvedCornerType from "../../enum/CurevedCornerType";
import CellType from "../../enum/CellType";
import RoundedRectangleContainer from "../atom/main_title/RoundedRectangleContainer";
import MenuButton from "../atom/main_title/MenuButton";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import  NavigateArrow from '../../assets/icon/navigate_arrow.svg?react';
import FontStyle from "../ui/FontStyle";

const LayeredContainer = styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const GridContainer1 = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(9, ${props.size}px)`};
  grid-template-rows:${(props) => `repeat(5, ${props.size}px)`};
  position: absolute;
  align-items: start;
  top: ${(props) => props.padding}px;
  left: ${(props) => props.padding}px;
  width: 100%;
  height: 100%;
`;

const GridItem1 = styled.div`
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  grid-column-end: span ${(props) => props.columnSpan || 1};
  grid-row-end: span ${(props) => props.rowSpan || 1};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const GridContainer2 = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(10, ${props.cellSize}px)`};
  grid-template-rows: ${(props) => `repeat(6, ${props.cellSize}px)`};
  position: absolute;
  gap: ${(props) => props.gap}px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const GridItem2 = styled.div`
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  grid-column-end: span ${(props) => props.columnSpan || 1};
  grid-row-end: span ${(props) => props.rowSpan || 1};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const TextStyle = styled.div`
  display: flex;
  text-align: start;
  color: ${Color.primary};
  ${FontStyle.display2Heavy}
`;

const firstLayerData = [
  { position: [2, 1], type: CellType.CIRCLE, color: Color.orange },
  { position: [7, 1], type: CellType.HORIZONTAL_RECTANGLE, color: Color.gray },
  { position: [9, 1], type: CellType.CIRCLE, color: Color.orange },
  { position: [1, 2], type: CellType.CIRCLE, color: Color.orange },
  { position: [4, 2], type: CellType.CIRCLE, color: Color.pink },
  { position: [5, 2], type: CellType.CIRCLE, color: Color.pink },
  { position: [6, 2], type: CellType.CIRCLE, color: Color.gray },
  { position: [7, 2], type: CellType.VERTICAL_RECTANGLE, color: Color.orange },
  { position: [10, 2], type: CellType.CIRCLE, color: Color.orange },
  { position: [2, 3], type: CellType.CIRCLE, color: Color.orange },
  { position: [3, 3], type: CellType.CIRCLE, color: Color.pink },
  { position: [4, 3], type: CellType.CIRCLE, color: Color.pink },
  { position: [8, 3], type: CellType.CIRCLE, color: Color.gray },
  { position: [9, 3], type: CellType.CIRCLE, color: Color.gray },
  { position: [8, 4], type: CellType.CIRCLE, color: Color.orange },
  { position: [8, 4], type: CellType.CIRCLE, color: Color.orange },
  { position: [9, 4], type: CellType.CIRCLE, color: Color.gray },
  { position: [10, 4], type: CellType.CIRCLE, color: Color.gray },
  { position: [5, 5], type: CellType.CIRCLE, color: Color.gray },
  { position: [6, 5], type: CellType.CIRCLE, color: Color.pink },  
  { position: [7, 6], type: CellType.CIRCLE, color: Color.pink },
  { position: [6, 6], type: CellType.CIRCLE, color: Color.gray },
  { position: [8, 6], type: CellType.CIRCLE, color: Color.primary },

  { position: [1, 1], type: CellType.CIRCLE, color: Color.gray, delay: 1 },
  { position: [3, 1], type: CellType.CIRCLE, color: Color.gray, delay: 2 },
  { position: [5, 6], type: CellType.CIRCLE, color: Color.gray, delay: 3 },
  { position: [10, 1], type: CellType.CIRCLE, color: Color.orange, delay: 4 },
  { position: [6, 1], type: CellType.CIRCLE, color: Color.gray, delay: 5 },
  { position: [10, 6], type: CellType.CIRCLE, color: Color.gray, delay: 6 },
  { position: [1, 3], type: CellType.CIRCLE, color: Color.gray, delay: 7 },
  { position: [9, 6], type: CellType.CIRCLE, color: Color.pink, delay: 8 },
  { position: [5, 1], type: CellType.CIRCLE, color: Color.pink, delay: 9 },
  { position: [1, 4], type: CellType.TEXT, color: Color.primary, delay: 10 },
  
  { position: [8, 5], type: CellType.CIRCLE_WITH_TEXT, color: Color.yellow, text: 'us' },
  { position: [5, 4], type: CellType.LONG_HORIZONTAL_RECTANGLE, color: Color.yellow, text: 'solve with' },
  { position: [2, 2], type: CellType.BUTTON, color: Color.primary, buttonText: '학회 소개', index: 0, url: 'introduce_hiarc' },
  { position: [4, 1], type: CellType.CIRCLE_WITH_ICON, color: Color.primary, index: 0 },
  { position: [8, 2], type: CellType.BUTTON, color: Color.primary, buttonText: '스터디', index: 1, url: 'study' },
  { position: [10, 3], type: CellType.CIRCLE_WITH_ICON, color: Color.primary, index: 1 },
  { position: [5, 3], type: CellType.BUTTON, color: Color.primary, buttonText: '학회 활동', index: 2, url: 'activity' },
  { position: [4, 4], type: CellType.CIRCLE_WITH_ICON, color: Color.primary, index: 2 },
  { position: [7, 5], type: CellType.CIRCLE_WITH_ICON, color: Color.primary, index: 3 },
  { position: [9, 5], type: CellType.BUTTON, color: Color.primary, buttonText: '수상 경력', index: 3, url: 'award' },
];

const firstGridData = [
  { position: [1, 1], type: CellType.CURVE, direction: CurvedCornerType.TOP_RIGHT, backgroundColor: Color.orange },
  { position: [6, 1], type: CellType.CURVE, direction: CurvedCornerType.TOP_RIGHT, backgroundColor: Color.gray },
  { position: [9, 1], type: CellType.CURVE, direction: CurvedCornerType.TOP_LEFT, backgroundColor: Color.orange },
  { position: [1, 2], type: CellType.CURVE, direction: CurvedCornerType.TOP_LEFT, backgroundColor: Color.orange },
  { position: [3, 2], type: CellType.CURVE, direction: CurvedCornerType.TOP_RIGHT, backgroundColor: Color.pink },
  { position: [4, 2], type: CellType.CURVE, direction: CurvedCornerType.TOP_RIGHT, backgroundColor: Color.pink },
  { position: [7, 3], type: CellType.CURVE, direction: CurvedCornerType.TOP_LEFT, backgroundColor: Color.orange },
  { position: [8, 3], type: CellType.CURVE, direction: CurvedCornerType.TOP_LEFT, backgroundColor: Color.gray },
  { position: [9, 3], type: CellType.CURVE, direction: CurvedCornerType.TOP_LEFT, backgroundColor: Color.gray },
  { position: [7, 4], type: CellType.CURVE, direction: CurvedCornerType.TOP_LEFT, backgroundColor: Color.yellow },
  { position: [5, 5], type: CellType.CURVE, direction: CurvedCornerType.BOTTOM_RIGHT, backgroundColor: Color.gray },
  { position: [6, 5], type: CellType.CURVE, direction: CurvedCornerType.BOTTOM_RIGHT, backgroundColor: Color.pink },

  { position: [3, 1], type: CellType.ANIMATE_CURVE, direction: CurvedCornerType.TOP_RIGHT, backgroundColor: Color.primary, index: 0 },
  { position: [9, 2], type: CellType.ANIMATE_CURVE, direction: CurvedCornerType.BOTTOM_RIGHT, backgroundColor: Color.primary, index: 1 },
  { position: [4, 3], type: CellType.ANIMATE_CURVE, direction: CurvedCornerType.BOTTOM_LEFT, backgroundColor: Color.primary, index: 2 },
  { position: [8, 5], type: CellType.ANIMATE_CURVE_WITH_DELAY, direction: CurvedCornerType.BOTTOM_LEFT, backgroundColor: Color.primary, index: 3, sequence: 1 },
  { position: [7, 5], type: CellType.ANIMATE_CURVE_WITH_DELAY, direction: CurvedCornerType.TOP_LEFT, backgroundColor: Color.primary, index: 3, sequence: 2 },
];

const MainTitle = ({ width }) => {
  const itemSize = 128 / 1252 * width;
  const cornerCurveSize = 78 / 1252 * width;
  const circleSize = 100 / 1252 * width;
  const circleSize2X = 228 / 1252 * width;
  const circleSize3X = 356 / 1252 * width;
  const paddingSize = 50 / 1252 * width;
  const gapSize = 28 / 1252 * width;
  const containerHeight = 740 / 1252 * width;

  const [visibleItems, setVisibleItems] = useState([]);
  const [isHovered, setIsHovered] = useState([false, false, false, false]);
  const navigate = useNavigate();


  useEffect(() => {
    firstLayerData.forEach((data) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, data.delay]);
      }, data.delay * 200);
    });
  }, []);

  const handleMouseEnter = (index) => {
    setIsHovered((prevHovered) => {
      const newHovered = [...prevHovered];
      newHovered[index] = true;
      return newHovered;
    });
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prevHovered) => {
      const newHovered = [...prevHovered];
      newHovered[index] = false;
      return newHovered;
    });
  };

  

  return (
    <LayeredContainer width={width} height={containerHeight}>
      <GridContainer1 padding={paddingSize} size={itemSize}>
        {firstGridData.map((data, index) => (
          <GridItem1
            key={index}  // 배열의 인덱스를 key로 사용
            gridColumn={data.position[0]}
            gridRow={data.position[1]}
            isVisible={data.delay ? visibleItems.includes(data.delay) : true}
          >
            {data.type === CellType.CURVE && (
              <CurvedCornerCell
                cellSize={itemSize}
                backgroundColor={data.backgroundColor}
                color={Color.background}
                curveSize={cornerCurveSize}
                type={data.direction}
                isHovered={true}
              />
            )}
            {data.type === CellType.ANIMATE_CURVE && (
              <CurvedCornerCell
                cellSize={itemSize}
                backgroundColor={data.backgroundColor}
                color={Color.background}
                curveSize={cornerCurveSize}
                type={data.direction}
                isHovered={isHovered[data.index]}
              />
            )}
            {data.type === CellType.ANIMATE_CURVE_WITH_DELAY && (
              <CurvedCornerCell
                cellSize={itemSize}
                backgroundColor={data.backgroundColor}
                color={Color.background}
                curveSize={cornerCurveSize}
                type={data.direction}
                isHovered={isHovered[data.index]}
                delay={true}
                sequence={data.sequence}
              />
            )}
          </GridItem1>
        ))}
      </GridContainer1>

      <GridContainer2 gap={gapSize} cellSize={circleSize}>
        {firstLayerData.map((data, index) => (
          <GridItem2
            key={index}
            gridColumn={data.position[0]}
            gridRow={data.position[1]}
            isVisible={data.delay ? visibleItems.includes(data.delay) : true}
          >
            {data.type === CellType.CIRCLE && (
              <CircleContainer color={data.color} size={circleSize} />
            )}
            {data.type === CellType.CIRCLE_WITH_TEXT && (
              <CircleContainer color={data.color} size={circleSize} >
                {data.text}
              </CircleContainer >
            )}
            {data.type === CellType.CIRCLE_WITH_ICON && (
              <CircleContainer
                color={data.color}
                size={circleSize}
                isHover={isHovered[data.index]} 
                animate={true}
                contentColor={Color.white} 
              >
                <NavigateArrow width={"30px"} height={"30px"} /> 
              </CircleContainer >
            )}
            {data.type === CellType.HORIZONTAL_RECTANGLE && (
              <RoundedRectangleContainer
                color={data.color}
                height={circleSize}
                width={circleSize2X}
              />
            )}
            {data.type === CellType.LONG_HORIZONTAL_RECTANGLE && (
              <RoundedRectangleContainer
                color={data.color}
                height={circleSize}
                width={circleSize3X}
                text={data.text}
              />
            )}
            {data.type === CellType.VERTICAL_RECTANGLE && (
              <RoundedRectangleContainer
                color={data.color}
                height={circleSize2X}
                width={circleSize}
              />
            )}
            {data.type === CellType.BUTTON && (
              <MenuButton 
                buttonText={data.buttonText}
                color={data.color}
                height={circleSize}
                width={circleSize2X}
                onMouseEnter={() => handleMouseEnter(data.index)}
                onMouseLeave={() => handleMouseLeave(data.index)}
                onClick={() => {navigate(data.url)}}
              />
            )}
            {data.type === CellType.TEXT && (
              <TextStyle >
                HI-
                ARC
              </TextStyle >
            )}
          </GridItem2>
        ))}
      </GridContainer2>
    </LayeredContainer>
  );
};

export default MainTitle;