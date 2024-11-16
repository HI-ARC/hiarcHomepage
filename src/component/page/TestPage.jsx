import YearBar from "../block/YearBar";
import AwardsList from "../block/awards_block/AwardsList";
import Layout from "../ui/Layout";
import { useState } from "react";

const TestPage = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  return (
    <Layout>
      <YearBar
        startYear={2017}
        endYear={2024}
        onYearSelect={setSelectedYear}
      ></YearBar>

      <AwardsList year={selectedYear}></AwardsList>
    </Layout>
  );
};

export default TestPage;
