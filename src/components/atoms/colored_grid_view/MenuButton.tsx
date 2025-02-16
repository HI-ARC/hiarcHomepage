import React from "react";
import styled from "styled-components";
import FontStyle from "../../ui/FontStyle";
import Color from "@/components/ui/Color";

interface MenuButtonProps {
  backgroundColor?: string;
  contentColor?: string;
  buttonText: string;
  width: number;
  height: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ButtonContainerStyle = styled.button<{
  width: number;
  height: number;
  backgroundColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  border: none;
`;

const ButtonTextStyle = styled.div<{ height: number; contentColor?: string }>`
  color: ${(props) => props.contentColor};
  ${FontStyle.display1Heavy}
  font-size: ${(props) => props.height * 0.4}px;
`;

const MenuButton: React.FC<MenuButtonProps> = ({
  backgroundColor = Color.primary,
  contentColor = Color.white,
  buttonText,
  width,
  height,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <ButtonContainerStyle
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      onClick={onClick}
    >
      <ButtonTextStyle height={height} contentColor={contentColor}>
        {buttonText}
      </ButtonTextStyle>
    </ButtonContainerStyle>
  );
};

export default MenuButton;
