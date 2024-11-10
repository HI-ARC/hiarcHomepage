import Layout from "../ui/Layout";
import YearBar from "../block/YearBar";
import OnYearBar from "../block/OnYearBar";

const AwardPage = () => {
  return (
    <Layout>
      <OnYearBar />
      <YearBar startYear={2017} endYear={2024} />
    </Layout>
  );
};

export default AwardPage;
