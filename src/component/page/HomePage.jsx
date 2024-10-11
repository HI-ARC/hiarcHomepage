import React from "react";
import Main from "../block/Main";
import Layout from "../ui/Layout";
import styled from "styled-components";

// 버튼을 가로로 정렬하는 컨테이너
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* 버튼 사이의 간격 */
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomePage = () => {
  const navigate = (url) => {
    window.location.href = url; // React Router의 nav 기능 대체
  };

  return (
    <Layout >
      <ButtonContainer >
        <ActionButton onClick={() => navigate("/introduce_hiarc")}>Intro</ActionButton>
        <ActionButton onClick={() => navigate("/activity")}>Activity</ActionButton>
        <ActionButton onClick={() => navigate("/study")}>Study</ActionButton>
        <ActionButton onClick={() => navigate("/award")}>Award</ActionButton>
      </ButtonContainer >
      <Main />
    </Layout >
  );
};

export default HomePage;