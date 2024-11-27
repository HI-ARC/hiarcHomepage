import styled from "styled-components";
import winnerData from "../../ui/WinnerData";
import Winner from "../../atom/award_atom/Winner";
import Color from "../../ui/Color";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
`;

//대회명 받아와서 랜더링한다. winner데이터를 다루는곳
const Competition = ({ competitionName }) => {
  const competitionWinner = winnerData[competitionName] || [];

  return (
    <Wrapper>
      <NameWrapper>| {competitionName}</NameWrapper>
      <WinnerWrapper>
        {competitionWinner.map(([winnerIndex, result, name], index) => (
          <Winner
            key={index}
            result={result}
            winnerName={name}
            color={winnerIndex % 2 == 1 ? Color.toggleColor : Color.transparent}
          />
        ))}
      </WinnerWrapper>
    </Wrapper>
  );
};

export default Competition;
