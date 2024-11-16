import styled from "styled-components";
import Color from "../../ui/Color";
import FontStyle from "../../ui/FontStyle";
import Competition from "../../atom/award_atom/Competition";

const ButtonStyle = styled.button`
  color: ${Color.primary};
  ${FontStyle.display1Bold}
  cursor: pointer;
  border-radius: 20px;
  padding: 5px;
  background-color: transparent;
  border: 1px solid ${Color.primary};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
//대회명들을 가지고있는 atom(Competition)을 모아놓은 리스트
const AwardsList = ({ year, competitionList }) => {
  const testList = ["따이따이", "소동환", "나노희원", "츤성호"];
  return (
    <Wrapper>
      <ButtonStyle>{year}</ButtonStyle>
      {testList.map((name, index) => (
        <Competition key={index} competitionName={name} />
      ))}
    </Wrapper>
  );
};

export default AwardsList;
