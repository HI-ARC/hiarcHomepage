import React from "react";
import styled from "styled-components";
import Color from "../../ui/Color";

const ThWrapper = styled.th`
  font-size: 12px;
  background-color: ${Color.gray100};
  font-weight: bold;
  padding: 12px;
  border: 1px solid ${Color.gray};
  border-left: none;
  text-align: left;
  white-space: nowrap;
`;

const WeekHeader = ({ weekHeader }) => {
  return <ThWrapper>{weekHeader}</ThWrapper>;
};

export default WeekHeader;
