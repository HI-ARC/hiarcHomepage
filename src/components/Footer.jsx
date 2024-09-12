import reallogo from "./../assets/hiarc-reallogo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="introduce">
        <img src={reallogo} />
        <div className="intro">
          <h4>HI-ARC 하이아크</h4>
          <div>홍익대학교 컴퓨터공학과 알고리즘 학회</div>
        </div>
      </div>

      <div className="contact">
        <div className="media">
          <div>instagram</div>
          <div>email</div>
          <div>kakao</div>
        </div>
        <div className="middle">
          <div> |</div>
          <div> |</div>
          <div> |</div>
        </div>
        <div className="want">
          <div>@hi-arc.official</div>
          <div>hiarc.offcial@gmail.com</div>
          <div>@hi-arc</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
