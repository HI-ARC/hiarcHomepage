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
  ${FontStyle.body1Medium}
  width: 100%;

  &:nth-child(even) {
    background-color: ${Color.orange05}; /* 짝수 행의 배경색 */
  }
`;

const TableCell = styled.td`
  padding: 6px;
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

const StudyTable = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <ContentText textAlign="center" text={item.week} />
              </TableCell>
              <TableCell>
                <ContentText textAlign="center" text={item.topic} />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default StudyTable;
