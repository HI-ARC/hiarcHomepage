import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface AnimatedContainerProps {
  delay?: string;
  children: React.ReactNode;
}

const AnimatedContainerStyle = styled.div<AnimatedContainerProps>`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
  width: 100%;
`;

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  delay,
}) => {
  return (
    <AnimatedContainerStyle delay={delay}>{children}</AnimatedContainerStyle>
  );
};

export default AnimatedContainer;
