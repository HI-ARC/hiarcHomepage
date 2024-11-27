import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  padding: 5px 3px;
  font-size: 14px;
  font-weight: 400;
`;
const ResultWrapper = styled.div`
  color: #333;
`;
const WinnerNameWrapper = styled.div`
  width: 50%;
`;

const Winner = ({ color, result, winnerName }) => {
  return (
    <Wrapper color={color}>
      <ResultWrapper>{result}</ResultWrapper>
      <WinnerNameWrapper>{winnerName}</WinnerNameWrapper>
    </Wrapper>
  );
};

export default Winner;
