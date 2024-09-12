import hiarc from "./../assets/hiarc-hiarc.png";
import { Route, Routes, Link } from "react-router-dom";
import "./Himain.css";

const Himain = () => {
  return (
    <div className="Himain">
      <div className="hiarc-img">
        <img src={hiarc} />
        <div className="Button">
          <Link className="link" to="/IntroHiarc">
            <section className="section1">학회소개</section>
          </Link>
          <Link className="link" to="/Activity">
            <section className="section2">학회활동</section>
          </Link>
          <Link className="link" to="/Study">
            <section className="section3">스터디</section>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Himain;
