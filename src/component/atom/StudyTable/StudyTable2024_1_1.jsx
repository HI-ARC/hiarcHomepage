import React from "react";
import styled from "styled-components";

// 스타일 컴포넌트 정의
const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 50%;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9; /* 짝수 행의 배경색 */
  }
`;

const TableHeader = styled.th`
  background-color: #f9f9e7;
  font-weight: bold;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

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

const StudyTable2024_1_1 = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Week</TableHeader>
            <TableHeader>Topics</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.week}</TableCell>
              <TableCell>{item.topic}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default StudyTable2024_1_1;
