import introImg from "./../assets/introduceAcademy.png";
import "./AcademyIntroduce.css";
const AcademyIntroduce = () => {
  return (
    <div className="AcademyIntroduce">
      <img className="intro-img" src={introImg}></img>
      <div className="dialogue">
        HI_ARC(Hongik_Algorithm Research Club, 하이아크)는 2017년부터 이어져
        내려온 홍익대학교 컴퓨터공학과 소속 알고리즘 학회입니다. 학회원들의
        문제해결력및 PS(Problem Solving) 실력 향상을 위해 난이도별 스터디와
        다양한 활동이 마련되어 있습니다. 또한 학회원들의 실전경험을 심어주고 CP
        (Competitive Programming) 수준을 올리기 위해 ICPC, UCPC와 같은 크고 작은
        대회를 준비하고 있습니다.
      </div>
    </div>
  );
};

export default AcademyIntroduce;
