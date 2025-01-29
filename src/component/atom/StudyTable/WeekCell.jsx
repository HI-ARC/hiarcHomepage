import React from "react";
import styled from "styled-components";
import Color from "../../ui/Color";

const WeekCellWrapper = styled.td`
  font-size: 12px;
  padding: 12px;
  border: 1px solid ${Color.gray};
  border-left: none;
`;

const WeekCell = ({weekCell}) => {
  return <WeekCellWrapper>{weekCell}</WeekCellWrapper>;
};

export default WeekCell;
