import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ResultWrapper = styled.div`
  font-size: 14px;
  color: #333;
`;
const WinnerNameWrapper = styled.div`
  font-size: 14px;
  width: 50%;
`;

const Winner = ({ result, winnerName }) => {
  return (
    <Wrapper>
      <ResultWrapper>{result}</ResultWrapper>
      <WinnerNameWrapper>{winnerName}</WinnerNameWrapper>
    </Wrapper>
  );
};

export default Winner;
