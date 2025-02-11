import Layout from "../templates/PageTemplate";
import MainTitle from "../organisms/main_title/MainTitle";
import MainMobileTitle from "../organisms/main_title/MainMobileTitle";

const HomePage = () => {
  return (
    <Layout align="center">
      {/* xs 사이즈 이하에서는 모바일 타이틀, xs 이상에서는 일반 타이틀을 보여줍니다. */}
      <div className="block xs:hidden">
        <MainMobileTitle />
      </div>
      <div className="hidden xs:block">
        <MainTitle />
      </div>
    </Layout>
  );
};

export default HomePage;
