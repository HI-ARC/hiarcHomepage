import React from "react";
import styled from "styled-components";
import winnerData from "@/constants/table_data/WinnerData";
import Winner from "../atoms/competition/Winner";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const NameWrapper = styled.div`
  display: flex;
  ${FontStyle.subhead2Bold}
  font-size: clamp(10px, 2vw, 14px);

  @media (max-width: 500px) {
    max-width: 40%;
    line-height: 1.6;
  }
`;

const WinnerWrapper = styled.div`
  ${FontStyle.body1Regular}
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: clamp(10px, 2vw, 14px);
`;

interface CompetitionTableProps {
  competitionName: string;
}

type WinnerTuple = [number, string, string];

const CompetitionTable: React.FC<CompetitionTableProps> = ({
  competitionName,
}) => {
  const competitionWinner: WinnerTuple[] =
    (winnerData as { [key: string]: WinnerTuple[] })[competitionName] || [];

  return (
    <Wrapper>
      <NameWrapper>| {competitionName}</NameWrapper>
      <WinnerWrapper>
        {competitionWinner.map(([winnerIndex, result, name], index) => (
          <Winner
            key={index}
            result={result}
            winnerName={name}
            color={
              winnerIndex % 2 === 1 ? Color.toggleColor : Color.transparent
            }
          />
        ))}
      </WinnerWrapper>
    </Wrapper>
  );
};

export default CompetitionTable;
