import React from "react";
import styled from "styled-components";
import FontStyle from "../../ui/FontStyle";
import Color from "../../ui/Color";

interface BorderedRectangleContainerProps {
  contentColor?: string;
  width: number;
  height: number;
  text: string;
}

const BorderedRectangleContainerStyle = styled.div<{
  borderColor?: string;
  width: number;
  height: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.height}px;
  background-color: ${Color.transparent};
  border: 0.5px solid ${(props) => props.borderColor || Color.primary};
`;

const TextStyle = styled.div<{ height: number; contentColor?: string }>`
  color: ${(props) => props.contentColor || Color.primary};
  ${FontStyle.display1ExtraBold};
  font-size: ${(props) => props.height * 0.45}px;
  word-spacing: -0.1rem;
  letter-spacing: -0.07em;
`;

const BorderedRectangleContainer: React.FC<BorderedRectangleContainerProps> = ({
  contentColor,
  width,
  height,
  text,
}) => {
  return (
    <BorderedRectangleContainerStyle
      width={width}
      height={height}
      borderColor={contentColor}
    >
      <TextStyle height={height} contentColor={contentColor}>
        {text}
      </TextStyle>
    </BorderedRectangleContainerStyle>
  );
};

export default BorderedRectangleContainer;
