import React from "react";
import styled from "styled-components";
import cppIcon from "./../../assets/hiarc-reallogo.png";
import TextCircle from "../atoms/TextCircle";
import Color from "../ui/Color";
import activity1 from "./../../assets/activity_1.png";
import activity2 from "./../../assets/activity_2.png";
import activity3 from "./../../assets/activity_3.png";

const ActivityHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 800px; /* 최대 너비 */
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
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

const ActivityImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 400 / 188;
  border-radius: 20px;
`;

const TagList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

const ImageWithTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  min-width: 200px;
  flex-basis: 30%; /* 기본적으로 3개 한 줄 */

  @media (max-width: 800px) {
    flex-basis: 48%; /* 🎯 800px 이하일 때 2개씩 배치 */
  }

  @media (max-width: 500px) {
    flex-basis: 100%; /* 🎯 500px 이하일 때 1개씩 배치 */
  }
`;

const ImageWithTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* 🎯 화면 크기에 따라 자동 줄 바꿈 */
  justify-content: space-between;
  gap: 10px;
`;

const ActivityHeader = () => {
  return (
    <ActivityHeaderWrapper>
      <FirstLayer>
        <LogoImg src={cppIcon} />
      </FirstLayer>
      <ImageWithTagWrapper>
        <ImageWithTag>
          <TagList>
            <TextCircle
              text={"학회활동"}
              backgroundColor={Color.primary}
              color={Color.white}
              padding="13px 30px"
            />
          </TagList>
          <ActivityImage src={activity1} />
        </ImageWithTag>

        <ImageWithTag>
          <TagList>
            <TextCircle
              text={"ICPC"}
              backgroundColor={Color.primary}
              color={Color.white}
              padding="13px 30px"
            />
            <TextCircle
              text={"하이팅"}
              backgroundColor={Color.primary}
              color={Color.white}
              padding="13px 30px"
            />
          </TagList>
          <ActivityImage src={activity2} />
        </ImageWithTag>

        <ImageWithTag>
          <TagList>
            <TextCircle
              text={"스터디"}
              backgroundColor={Color.primary}
              color={Color.white}
              padding="13px 35px"
            />
          </TagList>
          <ActivityImage src={activity3} />
        </ImageWithTag>
      </ImageWithTagWrapper>
    </ActivityHeaderWrapper>
  );
};

export default ActivityHeader;
