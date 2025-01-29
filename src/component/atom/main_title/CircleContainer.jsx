import styled, { keyframes, css } from "styled-components";
import FontStyle from "../../ui/FontStyle";
import Color from "../../ui/Color";

// fadeIn 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// fadeOut 애니메이션 정의
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// CircleContainer 스타일 정의
const CircleContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

// children 스타일 정의 (애니메이션 적용)
const ChildrenContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: ${(props) => (props.$isHovered ? 1 : 0)};
  ${FontStyle.display1ExtraBold}
  color: ${(props) => props.$contentColor};

  ${(props) =>
    props.animate &&
    css`
      animation: ${props.$isHovered ? fadeIn : fadeOut} 0.5s forwards;
    `};
`;

const CircleContainer = ({
  color,
  contentColor = Color.primary,
  size,
  children,
  isHovered = true,
  animate = false,
}) => {
  return (
    <CircleContainerStyle color={color} size={size}>
      <ChildrenContainer
        $isHovered={isHovered}
        animate={animate}
        $contentColor={contentColor}
      >
        {children}
      </ChildrenContainer>
    </CircleContainerStyle>
  );
};

export default CircleContainer;
