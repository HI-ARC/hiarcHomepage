import React from "react";
import styled from "styled-components";
import Label from "../ui/Label";
import Color from "../ui/Color";
import TextCircle from "../atoms/TextCircle";

const HitingIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center; /* 부모 컨테이너에서 수직 정렬 제어 */
  max-width: 800px;
  box-sizing: border-box;
  margin-bottom: 40px;
`;

const FirstLayer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SecondLayer = styled.div`
  display: flex;
  font-size: 17px;
`;

const HitingIntro = () => {
  return (
    <HitingIntroWrapper>
      <FirstLayer>
        <TextCircle
          text={"하이팅"}
          backgroundColor={Color.background}
          border={"none"}
          fontSize="20px"
        />
        <TextCircle
          text={"hi-arc.quest/home"}
          border={"0.5px solid"}
          backgroundColor={Color.background}
          padding="5px 10px"
        />
      </FirstLayer>
      <SecondLayer>{Label.HitingIntroduce}</SecondLayer>
    </HitingIntroWrapper>
  );
};

export default HitingIntro;
