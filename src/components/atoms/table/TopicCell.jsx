import styled from "styled-components";
import Color from "../../ui/Color";
import FontStyle from "@/components/ui/FontStyle";
import ContentText from "../text/ContentText";

const TopicCellWrapper = styled.td`
  ${FontStyle.body1Regular}
  padding-left: 10px;

  border: 1px solid ${Color.gray};
  border-right: none;
  white-space: nowrap;
`;

const TopicCell = ({ topicCell }) => {
  return (
    <TopicCellWrapper>
      <ContentText>{topicCell}</ContentText>
    </TopicCellWrapper>
  );
};

export default TopicCell;
