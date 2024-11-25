import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ isOdd }) =>
    isOdd % 2 !== 0 ? "#E2F5FF4D" : "transparent"};
  padding: 5px 3px;
  font-wieght: 800;
  font-size: 14px;
`;
const ResultWrapper = styled.div`
  color: #333;
`;
const WinnerNameWrapper = styled.div`
  width: 50%;
`;

const Winner = ({ isOdd, result, winnerName }) => {
  return (
    <Wrapper isOdd={isOdd}>
      <ResultWrapper>{result}</ResultWrapper>
      <WinnerNameWrapper>{winnerName}</WinnerNameWrapper>
    </Wrapper>
  );
};

export default Winner;
