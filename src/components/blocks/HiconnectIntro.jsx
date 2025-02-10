import React from "react";
import styled from "styled-components";
import TextCircle from "../atoms/TextCircle";
import Color from "../ui/Color";
import Label from "../ui/Label";

const HiconnectIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center; /* 부모 컨테이너에서 수직 정렬 제어 */
  max-width: 800px;
  padding-left: 1%;
  box-sizing: border-box;
  margin-top: 40px;
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

const HiconnectIntro = ({ title }) => {
  return (
    <HiconnectIntroWrapper>
      <FirstLayer>
        <TextCircle
          text={"HI-CONNECT"}
          backgroundColor={Color.background}
          border={"none"}
          fontSize="20px"
        />
        <TextCircle
          text={"OB 선배들과의 만남"}
          border={"1px solid"}
          backgroundColor={Color.background}
          padding="5px 10px"
        />
      </FirstLayer>
      <SecondLayer>{Label.HiconnectIntroduce}</SecondLayer>
    </HiconnectIntroWrapper>
  );
};

export default HiconnectIntro;
