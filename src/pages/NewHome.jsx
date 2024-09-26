import Test from "../components/test";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./NewHome.css";
const NewHome = () => {
  return (
    <div className="NewHome">
      <Header />
      <div className="Test">
        <Test />
      </div>
      <Footer />
    </div>
  );
};

export default NewHome;
