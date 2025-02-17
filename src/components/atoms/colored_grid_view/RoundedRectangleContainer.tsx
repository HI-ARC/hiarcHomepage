import React from "react";
import styled from "styled-components";
import FontStyle from "../../ui/FontStyle";
import Color from "../../ui/Color";

interface RoundedRectangleContainerProps {
  backgroundColor: string;
  contentColor?: string;
  width: number;
  height: number;
  text: string;
}

const RoundedRectangleContainerStyle = styled.div<{
  backgroundColor: string;
  width: number;
  height: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
`;

const TextStyle = styled.div<{ height: number; contentColor?: string }>`
  color: ${(props) => props.contentColor || Color.primary};
  ${FontStyle.display1ExtraBold};
  font-size: ${(props) => props.height * 0.4}px;
  word-spacing: -0.1rem;
  letter-spacing: -0.07em;
`;

const RoundedRectangleContainer: React.FC<RoundedRectangleContainerProps> = ({
  backgroundColor,
  contentColor,
  width,
  height,
  text,
}) => {
  return (
    <RoundedRectangleContainerStyle
      backgroundColor={backgroundColor}
      width={width}
      height={height}
    >
      <TextStyle height={height} contentColor={contentColor}>
        {text}
      </TextStyle>
    </RoundedRectangleContainerStyle>
  );
};

export default RoundedRectangleContainer;
