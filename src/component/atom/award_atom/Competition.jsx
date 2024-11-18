import styled from "styled-components";
import winnerData from "../../ui/WinnerData";
import Winner from "./Winner";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 500;
`;

const NameWrapper = styled.div`
  font-size: 14px;
  display: flex;
  font-weight: 900;
`;

const WinnerWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column; /* 우승자 목록 세로 정렬 */
  gap: 3px; /* 각 우승자 간 간격 추가 */
  background-color: ${({ isOdd }) =>
    isOdd ? "#E2F5FF" : "transparent"}; /* 색상 교차 */
`;

//대회명 받아와서 랜더링하는 atom
const Competition = ({ competitionName, isOdd }) => {
  const competitionWinner = winnerData[competitionName] || [];

  return (
    <Wrapper>
      <NameWrapper>|{competitionName}</NameWrapper>
      <WinnerWrapper isOdd={isOdd}>
        {competitionWinner.map(([result, name], index) => (
          <Winner key={index} result={result} winnerName={name} />
        ))}
      </WinnerWrapper>
    </Wrapper>
  );
};

export default Competition;
