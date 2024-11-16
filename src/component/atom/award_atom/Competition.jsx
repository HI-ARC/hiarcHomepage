import styled from "styled-components";

const UnitStyle = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;
//대회명 받아와서 랜더링하는 atom
const Competition = ({ competitionName }) => {
  return <UnitStyle>| {competitionName}</UnitStyle>;
};

export default Competition;
