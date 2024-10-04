import OTC from "./../assets/OrganizingTheContest.png";
import "./ContestAndIcpc.css";

const ContestAndIcpc = () => {
  return (
    <div className="ContestAndIcpc">
      <div className="writing">
        <div className="CompetitionCollect">
          하이아크는 2017년 창립 이후 꾸준히 교내 프로그래밍 경진대회를 주최하고
          있습니다. 각 분야에서 뛰어난 알고리즘 실력자들을 섭외하여 독창적이고
          도전적인 문제를 제공합니다. 또한, 신뢰할 수 있는 검수진을 통해 문제의
          완성도를 높이고, 이를 통해 학회원들의 문제 해결 능력을 향상 시키는 데
          기여하고 있습니다. 이 대회는 단순한 경쟁을 넘어, 학생들이 프로그래밍
          실력을 한 단계 더 발전시킬 수 있는 소중한 기회가 되고 있습니다.
        </div>
        <div className="FindSinchon">
          더 나아가 신촌 소속의 대학들(연세, 이화, 숙명, 서강)의 알고리즘
          학회들과 ICPC 신촌 연합을 맺어 같이 학회원들에게 알고리즘을 소개하고
          실력향상을 위해 힘쓰고 있습니다.
        </div>
        <div collec></div>
      </div>
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
