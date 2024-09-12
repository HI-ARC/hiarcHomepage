import logo from "./../assets/hiarc-logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="Logo">
      <img className="hi-arc-logo" src={logo} alt="" />
      <section className="banner">
        <section className="origin">
          <div>@since 2017</div>
          <div>@Hongik Algoritm Research Club</div>
        </section>
        <section className="slogan">solve with us </section>
      </section>
    </div>
  );
};

export default Logo;
