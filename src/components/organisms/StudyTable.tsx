import React from "react";
import styled from "styled-components";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";
import ContentText from "../atoms/text/ContentText";

// 스타일 컴포넌트 정의
const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-top: 0.5px solid ${Color.orange}; /* 위쪽 바깥선 */
  border-bottom: 0.5px solid ${Color.orange}; /* 아래쪽 바깥선 */
`;

const TableRow = styled.tr`
  width: 100%;

  &:nth-child(even) {
    background-color: ${Color.orange05}; /* 짝수 행의 배경색 */
  }
`;

const TableCell = styled.td`
  padding: clamp(0px, 2vw, 10px) clamp(10px, 2vw, 30px);
  align-items: center;
  justify-content: center;
  border-right: 0.5px solid ${Color.orange}; /* 세로선 */
  &:first-child {
    text-align: center;
  }
  &:last-child {
    border-right: none; /* 마지막 열의 세로선 제거 */
  }
`;

const TextStyle = styled.span`
  ${FontStyle.body1Regular}
  font-size: clamp(10px, 2vw, 14px);
  letter-spacing: -0.3px;
`;

const TextStyleNoWrap = styled.span`
  ${FontStyle.body1Regular}
  font-size: clamp(10px, 2vw, 14px);
  letter-spacing: -0.3px;
  white-space: nowrap;
`;

interface StudyData {
  week: string;
  topic: string;
}

interface StudyTableProps {
  data: StudyData[];
}

const StudyTable: React.FC<StudyTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextStyleNoWrap>{item.week}</TextStyleNoWrap>
              </TableCell>
              <TableCell>
                <TextStyle>{item.topic}</TextStyle>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default StudyTable;
