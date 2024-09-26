import reallogo from "./../assets/hiarc-reallogo.png";
import "./AcademyIntroduce.css";
const AcademyIntroduce = () => {
  return (
    <div className="AcademyIntroduce">
      <div className="LogoIntroduce">
        <img src={reallogo} className="Logo" />
        <div className="IntroLetter">학회소개</div>
      </div>

      <div className="content1">
        <div className="dialog">
          HI_ARC(Hongik_Algorithm Research Club, 하이아크)는 2017년부터 이어져
          내려온 홍익대학교 컴퓨터공학과 소속 알고리즘 학회입니다. HI_ARC에서는
          학회원들의 문제해결력 및 PS(Problem Solving) 실력 향상을 위해 난이도별
          스터디와 다양한 활동이 마련되어 있습니다. 또한 학회원들의 실전경험을
          심어주고 CP(Competitive Programming) 수준을 올리기 위해 ICPC, UCPC와
          같은 크고 작은 대회를 준비하고 있습니 다. 더 나아가 신촌 소속의
          대학들(연세, 이화, 숙명, 서강)의 알고리즘 학회들과 ICPC 신촌 연합을
          맺어 같이 학회원들에게 알고리즘을 소개하고 실 력 향상을 위해 힘쓰고
          있습니다.
        </div>
        <div className="BUTTONS">
          <section className="Collect">수상경력 모아보기</section>
          <section className="">운영진소개</section>
        </div>
      </div>
      <div className="content2"></div>
      <div className="content3"></div>
    </div>
  );
};

export default AcademyIntroduce;
