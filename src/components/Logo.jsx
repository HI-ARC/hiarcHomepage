import logo from "./../assets/hiarc-logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="Logo">
      <img className="hi-arc-logo" src={logo} alt="" />
      <section className="banner">
        <section className="origin">
          <div>@제 1회 하이콘 대회 배경</div>
        </section>
      </section>
    </div>
  );
};

export default Logo;
