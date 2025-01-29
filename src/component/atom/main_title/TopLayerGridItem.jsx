import styled from "styled-components";
import CellType from "../../../enum/CellType";
import Color from "../../ui/Color";
import CircleContainer from "./CircleContainer";
import RoundedRectangleContainer from "./RoundedRectangleContainer";
import MenuButton from "./MenuButton";
import FontStyle from "../../ui/FontStyle";
import NavigateArrow from "../../../assets/icon/navigate_arrow.svg?react";
import { useNavigate } from "react-router-dom";

const TopLayerGridItemStyle = styled.div`
  grid-column: ${(props) => props.$gridColumn};
  grid-row: ${(props) => props.$gridRow};
  grid-column-end: span ${(props) => props.columnSpan || 1};
  grid-row-end: span ${(props) => props.rowSpan || 1};
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const TitleStyle = styled.div`
  display: flex;
  text-align: start;
  color: ${Color.primary};
  ${FontStyle.display2Heavy}
`;

function TopLayerGridItem({
  data,
  circleSize,
  circleSize2X,
  circleSize3X,
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
  visibleItems,
}) {
  const navigate = useNavigate();

  return (
    <TopLayerGridItemStyle
      $gridColumn={data.position[0]}
      $gridRow={data.position[1]}
      $isVisible={data.delay ? visibleItems.includes(data.delay) : true}
    >
      {data.type === CellType.CIRCLE && (
        <CircleContainer color={data.color} size={circleSize} />
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
          isHovered={isHovered[data.index]}
          animate={true}
          contentColor={Color.white}
        >
          <NavigateArrow width={"30px"} height={"30px"} />
        </CircleContainer>
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
          onClick={() => {
            navigate(data.url);
          }}
        />
      )}
      {data.type === CellType.TEXT && <TitleStyle>HI- ARC</TitleStyle>}
    </TopLayerGridItemStyle>
  );
}

export default TopLayerGridItem;
