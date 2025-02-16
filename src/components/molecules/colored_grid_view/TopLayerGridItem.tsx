import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CellType from "../../../enum/CellType";
import Color from "../../ui/Color";
import CircleContainer from "../../atoms/colored_grid_view/CircleContainer";
import RoundedRectangleContainer from "@/components/atoms/colored_grid_view/RoundedRectangleContainer";
import MenuButton from "../../atoms/colored_grid_view/MenuButton";
import NavigateArrow from "../../../assets/icon/navigate_arrow.svg?react";
import TopLayerGridItemData from "@/types/TopLayerGridItemData";
import FontStyles from "@/constants/ui/FontStyles";
import ArrowButton from "@/components/atoms/colored_grid_view/ArrowButton";
import AssetImage from "@/components/atoms/image/AssetImage";
import BorderedRectangleContainer from "@/components/atoms/colored_grid_view/BorderedRectangleContainer";

interface TopLayerGridItemProps {
  data: TopLayerGridItemData;
  circleSize: number;
  circleSize2X: number;
  circleSize3X: number;
  circleSize4X: number;
  isHovered: { [key: number]: boolean };
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: (index: number) => void;
  visibleItems: number[];
}

interface StyledTextProps {
  size: number;
}

const GridItemContainer = styled.div<{ isVisible: boolean }>`
  transition: opacity 500ms ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

const StyledText = styled.div<StyledTextProps>`
  display: flex;
  text-align: start;
  color: ${Color.primary};
  ${FontStyles.display1Heavy}
  line-height: 0.92;
  font-size: ${(props) => props.size * 2}px;
`;

const TopLayerGridItem: React.FC<TopLayerGridItemProps> = ({
  data,
  circleSize,
  circleSize2X,
  circleSize3X,
  circleSize4X,
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
  visibleItems,
}) => {
  const navigate = useNavigate();
  const isVisible = data.delay ? visibleItems.includes(data.delay) : true;

  const gridStyle: React.CSSProperties = {
    gridColumn: data.position[0],
    gridRow: data.position[1],
    gridColumnEnd: "span 1",
    gridRowEnd: "span 1",
  };

  return (
    <GridItemContainer isVisible={isVisible} style={gridStyle}>
      {data.type === CellType.CIRCLE && (
        <CircleContainer color={data.backgroundColor} size={circleSize} />
      )}

      {data.type === CellType.CIRCLE_WITH_TEXT && (
        <CircleContainer color={data.backgroundColor} size={circleSize}>
          {data.text}
        </CircleContainer>
      )}

      {data.type === CellType.CIRCLE_WITH_ICON && (
        <CircleContainer
          color={data.backgroundColor}
          size={circleSize}
          isHovered={isHovered[data.index!]}
          animate
          contentColor={Color.white}
        >
          <NavigateArrow width="30px" height="30px" />
        </CircleContainer>
      )}

      {data.type === CellType.HORIZONTAL_RECTANGLE && (
        <RoundedRectangleContainer
          backgroundColor={data.backgroundColor}
          contentColor={data.contentColor}
          height={circleSize}
          width={circleSize2X}
          text={data.text ?? ""}
        />
      )}

      {data.type === CellType.LONG_HORIZONTAL_RECTANGLE && (
        <RoundedRectangleContainer
          backgroundColor={data.backgroundColor}
          contentColor={data.contentColor}
          height={circleSize}
          width={circleSize3X}
          text={data.text as string}
        />
      )}

      {data.type === CellType.BORDERED_LONG_HORIZONTAL_RECTANGLE && (
        <BorderedRectangleContainer
          contentColor={data.contentColor}
          height={circleSize}
          width={circleSize3X}
          text={data.text as string}
        />
      )}

      {data.type === CellType.VERTICAL_RECTANGLE && (
        <RoundedRectangleContainer
          backgroundColor={data.backgroundColor}
          height={circleSize2X}
          width={circleSize}
          text={""}
        />
      )}

      {data.type === CellType.BUTTON && (
        <MenuButton
          buttonText={data.buttonText || ""}
          backgroundColor={data.backgroundColor}
          contentColor={data.contentColor}
          height={circleSize}
          width={circleSize2X}
          onMouseEnter={() => handleMouseEnter(data.index!)}
          onMouseLeave={() => handleMouseLeave(data.index!)}
          onClick={() => navigate(data.url || "")}
        />
      )}

      {data.type === CellType.BUTTON_WITH_ICON && (
        <ArrowButton
          buttonText={data.buttonText || ""}
          backgroundColor={data.backgroundColor}
          contentColor={data.contentColor}
          height={circleSize}
          width={circleSize2X}
          onClick={() => navigate(data.url || "")}
        />
      )}

      {data.type === CellType.LONG_BUTTON_WITH_ICON && (
        <ArrowButton
          buttonText={data.buttonText || ""}
          backgroundColor={data.backgroundColor}
          contentColor={data.contentColor}
          height={circleSize}
          width={circleSize3X}
          onClick={
            data.websiteUrl !== undefined
              ? () => (window.location.href = data.websiteUrl!)
              : () => navigate(data.url || "")
          }
        />
      )}

      {data.type === CellType.ICON && (
        <AssetImage src={data.image!} height={circleSize} width={circleSize} />
      )}

      {data.type === CellType.IMAGE && (
        <AssetImage
          src={data.image!}
          borderRadius={circleSize / 2}
          height={circleSize2X}
          width={circleSize4X}
          caption={data.caption}
        />
      )}

      {data.type === CellType.TEXT && (
        <StyledText size={circleSize}>HI- ARC</StyledText>
      )}
    </GridItemContainer>
  );
};

export default TopLayerGridItem;
