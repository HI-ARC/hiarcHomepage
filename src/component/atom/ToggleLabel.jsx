import styled from "styled-components";
import HiarcCompetition from "../ui/HiarcCompetition";
const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px; /* 항목 간 간격 추가 */
`;
const CompetitionItem = styled.div`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
`;

const ToggleLabel = () => {
  return (
    <Wrapper>
      {HiarcCompetition.map((item, index) => (
        <CompetitionItem key={index}>{item}</CompetitionItem>
      ))}
    </Wrapper>
  );
};

export default ToggleLabel;
