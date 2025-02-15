import React from "react";
import styled from "styled-components";
import Color from "../../ui/Color";
import NavigateArrow from "@/assets/icon/navigate_arrow.svg?react";

interface SectionRoundedRectangleContainerProps {
  color: string;
  width: number;
  height: number;
  text: string;
  textColor?: string;
  isButton?: boolean;
  onClick?: () => void;
}

const Container = styled.div<{
  width: number;
  height: number;
  bgColor: string;
  isButton: boolean;
}>`
  display: flex;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ height }) => height}px;
  background-color: ${({ bgColor }) => bgColor};
  ${({ isButton }) => isButton && "cursor: pointer;"}
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span<{ textColor: string }>`
  color: ${({ textColor }) => textColor};
  font-size: clamp(2.4rem, calc((100vw - 6rem) * 0.034), 2.7rem);
  word-spacing: -0.1rem;
  letter-spacing: -0.07em;
  font-weight: 800; /* Extra Bold */
`;

const ArrowContainer = styled.div`
  width: 35px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionRoundedRectangleContainer: React.FC<
  SectionRoundedRectangleContainerProps
> = ({
  color,
  width,
  height,
  text,
  textColor = Color.primary,
  isButton = false,
  onClick,
}) => {
  return (
    <Container
      onClick={isButton ? onClick : undefined}
      width={width}
      height={height}
      bgColor={color}
      isButton={isButton}
    >
      <TextContainer>
        <Text textColor={textColor}>{text}</Text>
      </TextContainer>
      {isButton && (
        <ArrowContainer>
          <NavigateArrow width="40px" height="40px" />
        </ArrowContainer>
      )}
    </Container>
  );
};

export default SectionRoundedRectangleContainer;
