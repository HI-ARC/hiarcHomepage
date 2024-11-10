import React from "react";
import styled from "styled-components";
import Color from "../ui/Color";

const data = [
  { week: "1주차", topic: "입출력, 변수, 연산자, 자료형" },
  { week: "2주차", topic: "조건문, 반복문, 빠른 입출력" },
  { week: "3주차", topic: "문자열" },
  { week: "4주차", topic: "리스트" },
  { week: "5주차", topic: "브루트포스" },
  { week: "6주차", topic: "딕셔너리, 셋" },
  { week: "7주차", topic: "함수, 재귀함수" },
  { week: "8주차", topic: "기초 내부 대회" },
];

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
  &:nth-child(even) {
    background-color: #ffec81; /* 짝수 행의 배경색 */
  }
`;

const WeekHeader = styled.th`
  font-size: 12px;
  background-color: #f9f9e7;
  font-weight: bold;
  padding: 12px;
  border: 1px solid #ddd;
  border-left: none;
  text-align: left;
  white-space: nowrap;
`;

const TopicsHeader = styled.th`
  font-size: 12px;
  background-color: #f9f9e7;
  font-weight: bold;
  padding: 10px;
  border: 1px solid #ddd;
  border-right: none;
  text-align: left;
  white-space: nowrap;
`;

const WeekCell = styled.td`
  font-size: 12px;
  padding: 12px;
  border: 1px solid #ddd;
  border-left: none;
`;

const TopicCell = styled.td`
  font-size: 12px;
  padding-left: 10px;
  padding-right: 170px;
  border: 1px solid #ddd;
  border-right: none;
  white-space: nowrap;
`;

const StudyPlan = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <WeekHeader>Week</WeekHeader>
            <TopicsHeader>Topics</TopicsHeader>
          </TableRow>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <WeekCell>{item.week}</WeekCell>
              <TopicCell>{item.topic}</TopicCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default StudyPlan;
