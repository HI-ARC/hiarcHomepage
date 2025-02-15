import React from "react";
import styled from "styled-components";
import Color from "../../ui/Color";
import NavigateArrow from "@/assets/icon/navigate_arrow.svg?react";
import FontStyle from "@/components/ui/FontStyle";

interface ArrowButtonProps {
  backgroundColor?: string;
  contentColor?: string;
  buttonText: string;
  width: number;
  height: number;
  onClick?: () => void;
}

const ButtonContainerStyle = styled.div<{
  width: number;
  height: number;
  bgColor: string;
}>`
  display: flex;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ height }) => height}px;
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span<{ textColor?: string; height: number }>`
  ${FontStyle.display1ExtraBold}
  color: ${({ textColor }) => textColor || Color.white};
  font-size: ${(props) => props.height * 0.4}px;
  word-spacing: -0.1rem;
  letter-spacing: -0.07em;
`;

const ArrowContainer = styled.div`
  width: 35px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowButton: React.FC<ArrowButtonProps> = ({
  backgroundColor,
  contentColor,
  buttonText,
  width,
  height,
  onClick,
}) => {
  return (
    <ButtonContainerStyle
      width={width}
      height={height}
      bgColor={backgroundColor || Color.primary}
      onClick={onClick}
    >
      <TextContainer>
        <Text height={height} textColor={contentColor}>
          {buttonText}
        </Text>
      </TextContainer>
      <ArrowContainer>
        <NavigateArrow width="40px" height="40px" />
      </ArrowContainer>
    </ButtonContainerStyle>
  );
};

export default ArrowButton;
