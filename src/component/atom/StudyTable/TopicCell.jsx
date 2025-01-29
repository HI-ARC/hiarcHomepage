import React from "react";
import styled from "styled-components";
import Color from "../../ui/Color";

const TopicCellWrapper = styled.td`
  font-size: 12px;
  padding-left: 10px;
  padding-right: 150px;
  border-left: 1px solid #ffa800;
  border-top: ${(props) => (props.isFirst ? "1px solid #ffa800" : "none")};
  border-bottom: ${(props) => (props.isLast ? "1px solid #ffa800" : "none")};

  white-space: nowrap;
`;

const TopicCell = ({topicCell, isFirst, isLast}) => {
  return (
    <TopicCellWrapper isFirst={isFirst} isLast={isLast}>
      {topicCell}
    </TopicCellWrapper>
  );
};

export default TopicCell;
