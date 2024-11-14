import React from "react";
import styled from "styled-components";
import Color from "../../ui/Color";

const TopicCellWrapper = styled.td`
  font-size: 12px;
  padding-left: 10px;
  padding-right: 150px;
  border: 1px solid ${Color.gray};
  border-right: none;
  white-space: nowrap;
`;

const TopicCell = ({ topicCell }) => {
  return <TopicCellWrapper>{topicCell}</TopicCellWrapper>;
};

export default TopicCell;
