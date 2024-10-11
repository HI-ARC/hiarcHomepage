import Layout from "../ui/Layout";
import YearBar from "../block/YearBar"

const AwardPage = () => {
  return (
    <Layout >
      <YearBar startYear={2017} endYear={2024} />
    </Layout >
  );
}

export default AwardPage;