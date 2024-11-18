import styled from "styled-components";
import Competition from "../../atom/award_atom/Competition";
import competitionData from "../../ui/CompetitionData";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
//대회명들을 가지고있는 atom(COmpetition)을 모아놓은 리스트
const AwardsList = ({ year }) => {
  const competitions = competitionData[year] || [];

  return (
    <Wrapper>
      {competitions.map((name, index) => (
        <Competition
          key={index}
          competitionName={name}
          isOdd={index % 2 === 0}
        />
      ))}
    </Wrapper>
  );
};

export default AwardsList;
