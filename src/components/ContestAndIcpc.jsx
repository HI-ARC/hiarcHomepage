import OTC from "./../assets/OrganizingTheContest.png";
import "./ContestAndIcpc.css";
import React, { useState } from "react";
import TB from "./../assets/Polygon 1.png";

const ContestAndIcpc = () => {
  const [showPage, setShowPage] = useState(false);
  const togglePage = () => {
    setShowPage(!showPage);
  };

  const [showPage2, setShowPage2] = useState(false);
  const togglePage2 = () => {
    setShowPage2(!showPage2);
  };

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
        <div>
          <button onClick={togglePage} className="toggleButton1">
            <img src={TB} className="button_img"></img>대회 몰아보기
          </button>
          {showPage && (
            <div className="hiddenpage">
              <div>- 제 1회 하이콘</div>
              <div> - 2022 홍익대학교 HI-ARC 프로그래밍 경진대회 </div>
              <div>-2021 홍익대학교 프로그래밍 경진대회</div>
              <div>- 2019 홍익대학교 컴퓨터공학과 코딩대회</div>
              <div>- 2018 홍익대학교 컴퓨터공학과 코딩대회</div>
              <div> - 2017 홍익대학교 컴퓨터공학과 코딩대회</div>
            </div>
          )}
        </div>

        <div className="FindSinchon">
          더 나아가 신촌 소속의 대학들(연세, 이화, 숙명, 서강)의 알고리즘
          학회들과 ICPC 신촌 연합을 맺어 같이 학회원들에게 알고리즘을 소개하고
          실력향상을 위해 힘쓰고 있습니다.
        </div>
        <div>
          <button onClick={togglePage2} className="toggleButton2">
            <img src={TB} className="button_img"></img>ICPC 신촌 자세히 알아보기
          </button>
          {showPage2 && (
            <div className="hiddenpage2">
              ICPC Sinchon는 매번 방학 기간을 이용하여 연합 스터디와 합동 캠프,
              여러 대면 행사, 프로그래밍 대회 SUAPC 등을 진행하고 있습니다. 캠프
              강사분들의 이야기를 들으며 알고리즘에 대한 궁금증을 해소할 수 있는
              알고리즘 토크쇼와 같은 행사를 제공합니다. 이외에도 Discord 등을
              통하여 다양한 정보와 지식을 함께 교류하는 알고리즘 커뮤니티를
              생성에 힘쓰고 있습니다.
            </div>
          )}
        </div>
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
