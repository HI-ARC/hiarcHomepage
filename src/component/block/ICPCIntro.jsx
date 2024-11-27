import React from "react";
import styled from "styled-components";
import Color from "../ui/Color";
import TextCircle from "../atom/TextCircle";
import Label from "../ui/Label";

const ICPCIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center; /* 부모 컨테이너에서 수직 정렬 제어 */
  width: 800px;
  padding-left: 1%;
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
const ICPCIntro = () => {
  return (
    <ICPCIntroWrapper>
      <FirstLayer>
        <TextCircle
          text={"ICPC"}
          backgroundColor={Color.background}
          border={"none"}
          fontSize="20px"
        />
        <TextCircle
          text={"국제 대학생 프로그래밍 대회"}
          border={"1px solid"}
          backgroundColor={Color.background}
          padding="5px 10px"
        />
        <TextCircle
          text={"예선"}
          border={"1px solid"}
          backgroundColor={Color.background}
          padding="5px 10px"
        />
      </FirstLayer>
      <SecondLayer>{Label.ICPCIntroduce}</SecondLayer>
    </ICPCIntroWrapper>
  );
};

export default ICPCIntro;
