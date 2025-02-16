import styled from "styled-components";
import Color from "../../ui/Color";

const TopicHeaderWrapper = styled.th`
  font-size: 12px;
  background-color: ${Color.gray100};
  font-weight: bold;
  padding: 10px;
  border: 1px solid ${Color.gray};
  border-right: none;
  text-align: left;
  white-space: nowrap;
`;

const TopicHeader = ({ topicHeader }) => {
  return <TopicHeaderWrapper>{topicHeader}</TopicHeaderWrapper>;
};

export default TopicHeader;
