import React from "react";
import styled from "styled-components";
import Color from "../ui/Color";
import TextCircle from "../atoms/TextCircle";
import FontStyle from "../ui/FontStyle";

const ActivitySectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center; /* 부모 컨테이너에서 수직 정렬 제어 */
  max-width: 800px;
  box-sizing: border-box;
  margin-top: 40px;
  align-items: flex-start;s
`;

const FirstLayer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const TitleText = styled.div`
  ${FontStyle.subhead3ExtraBold}
  color: ${Color.primary};
  white-space: nowrap;
`;

const SecondLayer = styled.div`
  display: flex;
  font-size: 17px;
`;
const ActiviySection = ({ titleText, tagList, content }) => {
  return (
    <ActivitySectionStyle>
      <FirstLayer>
        <TitleText>{titleText}</TitleText>
        {tagList.map((tag, index) => (
          <TextCircle
            key={index}
            text={tag}
            border={"0.5px solid"}
            backgroundColor={Color.background}
            padding="5px 10px"
            textStyle={FontStyle.body1Regular}
            mobileTextStyle={FontStyle.body1Regular}
          />
        ))}
      </FirstLayer>
      <SecondLayer>{content}</SecondLayer>
    </ActivitySectionStyle>
  );
};

export default ActiviySection;
