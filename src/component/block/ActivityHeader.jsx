import React from "react";
import styled from "styled-components";
import cppIcon from "./../../assets/hiarc-reallogo.png";
import TextCircle from "../atom/TextCircle";
import Color from "../ui/Color";
import activity1 from "./../../assets/activity_1.png";
import activity2 from "./../../assets/activity_2.png";
import activity3 from "./../../assets/activity_3.png";

const ActivityHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-self: center; /* 부모 컨테이너에서 수직 정렬 제어 */
  width: 800px;
  padding-left: 1%;
  box-sizing: border-box;
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
`;

const FirstLayer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 10px 0;
`;

const SecondLayer = styled.div`
  display: flex;

  padding: 10px 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActivityImage = styled.img`
  width: 240px;
  height: 150px;
`;

const TextCircleWrapper = styled.div`
  margin-right: ${(props) => props.marginRight};
`;

const ActivityHeader = () => {
  return (
    <ActivityHeaderWrapper>
      <FirstLayer>
        <LogoImg src={cppIcon} />
        <TextCircle
          text={"학회활동"}
          backgroundColor={Color.yellow}
          color={Color.primary}
          padding="10px 50px"
          fontSize="30px"
        />
      </FirstLayer>
      <SecondLayer>
        <TextCircleWrapper marginRight="80px">
          <TextCircle
            text={"HI-CONNECT"}
            color={Color.white}
            backgroundColor={Color.primary}
            padding="13px 35px"
            fontSize="22px"
          />
        </TextCircleWrapper>
        <TextCircleWrapper marginRight="20px">
          <TextCircle
            text={"ICPC"}
            color={Color.white}
            backgroundColor={Color.primary}
            padding="13px 35px"
            fontSize="22px"
          />
        </TextCircleWrapper>
        <TextCircleWrapper marginRight="100px">
          <TextCircle
            text={"하이팅"}
            color={Color.white}
            backgroundColor={Color.primary}
            padding="13px 35px"
            fontSize="22px"
          />
        </TextCircleWrapper>
        <TextCircle
          text={"스터디"}
          color={Color.white}
          backgroundColor={Color.primary}
          padding="13px 35px"
          fontSize="22px"
        />
      </SecondLayer>
      <ImageWrapper>
        <ActivityImage src={activity1} />
        <ActivityImage src={activity2} />
        <ActivityImage src={activity3} />
      </ImageWrapper>
    </ActivityHeaderWrapper>
  );
};

export default ActivityHeader;
