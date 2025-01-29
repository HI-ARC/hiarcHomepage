import React from "react";
import styled from "styled-components";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";

// 글자 담긴 원형 스타일
const CircleStyle = styled.div`
  color: ${(props) => props.color};
  ${(props) => props.textStyle ?? FontStyle.subhead3ExtraBold}
  background-color: ${(props) => props.backgroundColor};
  border-radius: 25px;
  border: ${(props) => props.border};
  border-color: ${(props) => props.borderColor};
  padding: ${(props) => props.padding};
  white-space: nowrap;

  /* 🎯 화면 크기가 800px 이하일 때 폰트 크기를 줄임 */
  @media (max-width: 800px) {
    ${(props) => props.mobileTextStyle ?? FontStyle.subhead1ExtraBold}
  }
`;

// 텍스트 담고, 글자색과 배경색 디폴트값 설정
const TextCircle = ({
  text,
  color = Color.primary,
  backgroundColor = Color.yellow,
  border,
  borderColor,
  padding = "12px 15px",
  fontSize = "15px",
  textStyle,
  mobileTextStyle,
}) => {
  return (
    <CircleStyle
      color={color}
      backgroundColor={backgroundColor}
      border={border}
      borderColor={borderColor}
      padding={padding}
      fontSize={fontSize}
      textStyle={textStyle}
      mobileTextStyle={mobileTextStyle}
    >
      {text}
    </CircleStyle>
  );
};

export default TextCircle;
