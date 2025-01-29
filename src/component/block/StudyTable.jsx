import React from "react";
import styled from "styled-components";
import WeekCell from "../atom/StudyTable/WeekCell";
import WeekHeader from "../atom/StudyTable/WeekHeader";
import TopicCell from "../atom/StudyTable/TopicCell";
import TopicHeader from "../atom/StudyTable/TopicHeader";
import Color from "../ui/Color";

// 스타일 컴포넌트 정의
const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 50px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #ffa80005; /* 짝수 행의 배경색 */
  }
`;

const StudyTable = ({data}) => {
  return (
    <TableContainer>
      <Table>
        {/* <thead>
          <TableRow>
            <WeekHeader weekHeader={"Week"}></WeekHeader>
            <TopicHeader topicHeader={"Topic"}></TopicHeader>
          </TableRow>
        </thead> */}
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <WeekCell weekCell={item.week}></WeekCell>
              <TopicCell topicCell={item.topic}></TopicCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default StudyTable;
