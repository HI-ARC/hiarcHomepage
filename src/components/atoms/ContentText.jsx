import styled from "styled-components";
import FontStyle from "../ui/FontStyle";
import Color from "../ui/Color";
import SizeValue from "../ui/SizeValue";

const ContentTextStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${FontStyle.body1Medium}
  line-height: 1.75;
  /* color: ${Color.primary}; */
  width: ${SizeValue.width.full};
`;

const ContentText = ({contentText}) => {
  return <ContentTextStyle> {contentText} </ContentTextStyle>;
};

export default ContentText;
