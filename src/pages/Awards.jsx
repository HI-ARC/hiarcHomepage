import Header from "../components/Header";
import YearBar from "../components/YearBar";

const Awards = () => {
  return (
    <div>
      <Header />
      <YearBar startYear={2017} endYear={2024} />
    </div>
  );
};

export default Awards;
