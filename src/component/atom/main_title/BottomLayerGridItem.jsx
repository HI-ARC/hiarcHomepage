import styled from "styled-components";
import CurvedCornerCell from "./CurvedCornerCell";
import CellType from "../../../enum/CellType";
import Color from "../../ui/Color";

const BottomLayerGridItemStyle = styled.div`
  grid-column: ${(props) => props.$gridColumn};
  grid-row: ${(props) => props.$gridRow};
  grid-column-end: span ${(props) => props.columnSpan || 1};
  grid-row-end: span ${(props) => props.rowSpan || 1};
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  pointer-events: auto;
`;

/// data는 BottomLayerGridData의 객체를 받습니다.
/// 객체 에시)
/// {
///   position: [8, 5],
///   type: CellType.ANIMATE_CURVE_WITH_DELAY,
///   direction: CurvedCornerType.BOTTOM_LEFT,
///   backgroundColor: Color.primary,
///   index: 3,
///   sequence: 1,
/// },
function BottomLayerGridItem({
  data,
  itemSize,
  cornerCurveSize,
  isHovered,
  visibleItems,
}) {
  return (
    <BottomLayerGridItemStyle
      $gridColumn={data.position[0]}
      $gridRow={data.position[1]}
      $isVisible={data.delay ? visibleItems.includes(data.delay) : true}
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
          isHovered={isHovered[data.index]}
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
          isHovered={isHovered[data.index]}
          delay={true}
          sequence={data.sequence}
        />
      )}
    </BottomLayerGridItemStyle>
  );
}

export default BottomLayerGridItem;
