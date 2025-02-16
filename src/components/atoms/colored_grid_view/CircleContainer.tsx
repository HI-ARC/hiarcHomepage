import React from "react";
import styled, { keyframes, css } from "styled-components";
import Color from "../../ui/Color";
import FontStyle from "@/components/ui/FontStyle";

interface CircleContainerProps {
  color: string;
  contentColor?: string;
  size: number;
  isHovered?: boolean;
  animate?: boolean;
  children?: React.ReactNode;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const OuterContainer = styled.div<{ size: number; $bgColor: string }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ $bgColor }) => $bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
`;

const InnerContainer = styled.div<{
  $contentColor: string;
  $isHovered: boolean;
  $animate: boolean;
  $size: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${({ $contentColor }) => $contentColor};
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  ${FontStyle.display1ExtraBold}
  font-size: ${(props) => props.$size * 0.45}px;
  word-spacing: -0.1rem;
  letter-spacing: -0.07em;
  transition: opacity 500ms;

  ${({ $animate, $isHovered }) =>
    $animate &&
    css`
      animation: ${$isHovered ? fadeIn : fadeOut} 500ms forwards;
    `}
`;

const CircleContainer: React.FC<CircleContainerProps> = ({
  color,
  contentColor = Color.primary,
  size,
  children,
  isHovered = true,
  animate = false,
}) => {
  return (
    <OuterContainer size={size} $bgColor={color}>
      <InnerContainer
        $contentColor={contentColor}
        $isHovered={isHovered}
        $animate={animate}
        $size={size}
      >
        {children}
      </InnerContainer>
    </OuterContainer>
  );
};

export default CircleContainer;
