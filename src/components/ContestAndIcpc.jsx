import OTC from "./../assets/OrganizingTheContest.png";
import "./ContestAndIcpc.css";

const ContestAndIcpc = () => {
  return (
    <div className="ContestAndIcpc">
      <div className="writing">글글글</div>
      <div className="imgsection">
        <img src={OTC} className="OTCIMG"></img>
        <a href="https://icpc-sinchon.io/" className="IcpcButton">
          ICPC신촌
        </a>
      </div>
    </div>
  );
};

export default ContestAndIcpc;
