import Colors from "@/constants/ui/Colors";
import FontStyles from "@/constants/ui/FontStyles";
import React from "react";
import styled from "styled-components";

interface HeaderMenuButtonProps {
  text: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  color: ${Colors.primary};
  ${FontStyles.subhead3ExtraBold}
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  transition:
    background-color 500ms ease,
    color 500ms ease;

  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.white};
  }
`;

const HeaderMenuButton: React.FC<HeaderMenuButtonProps> = ({
  text,
  onClick,
}) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default HeaderMenuButton;
