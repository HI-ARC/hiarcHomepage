import React from "react";
import styled from "styled-components";
import Color from "../../ui/Color";

const WeekCellWrapper = styled.td`
  font-size: 12px;
  padding: 12px;
  border-top: ${(props) => (props.isFirst ? "1px solid #ffa800" : "none")};
  border-bottom: ${(props) => (props.isLast ? "1px solid #ffa800" : "none")};
`;

const WeekCell = ({weekCell, isFirst, isLast}) => {
  return (
    <WeekCellWrapper isFirst={isFirst} isLast={isLast}>
      {weekCell}
    </WeekCellWrapper>
  );
};

export default WeekCell;
