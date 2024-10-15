import React from "react";
import Layout from "../ui/Layout";
import styled from "styled-components";
import MainTitle from "../block/MainTitle";

const ResponsiveMainTitle = styled.div`
  width: 100%;
  max-width: 800px; /* 최대 너비 설정 */
  margin: 0 auto; /* 가운데 정렬 */
`;

const HomePage = () => {
  return (
    <Layout >
      <ResponsiveMainTitle>
        <MainTitle width={800} />
      </ResponsiveMainTitle>
    </Layout >
  );
};

export default HomePage;