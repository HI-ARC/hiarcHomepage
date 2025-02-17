import React from "react";
import styled from "styled-components";

interface WrapperProps {
  color: string;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  padding: 5px 3px;
  font-size: clamp(10px, 2vw, 14px);
  font-weight: 400;
`;

const ResultWrapper = styled.div`
  color: #333;
`;

const WinnerNameWrapper = styled.div`
  width: 50%;
`;

interface WinnerProps {
  color: string;
  result: string;
  winnerName: string;
}

const Winner: React.FC<WinnerProps> = ({ color, result, winnerName }) => {
  return (
    <Wrapper color={color}>
      <ResultWrapper>{result}</ResultWrapper>
      <WinnerNameWrapper>{winnerName}</WinnerNameWrapper>
    </Wrapper>
  );
};

export default Winner;
