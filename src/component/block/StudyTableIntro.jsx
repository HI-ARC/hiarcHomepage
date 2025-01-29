import React from "react";
import styled from "styled-components";
import TextCircle from "../atom/TextCircle";
import Color from "../ui/Color";
import pythonIcon from "./../../assets/python 3.png";
import cppIcon from "./../../assets/c++icon.png";

const StudyIntroWrapper = styled.div`
  display: flex;
  gap: 18px;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 10px;
`;

const LanguageImage = styled.img`
  width: 40px;
  height: 48px;
`;

const StudyTableIntro = ({semester, studyName1, studyName2}) => {
  return (
    <StudyIntroWrapper>
      <TextCircle
        text={semester}
        color={Color.white}
        backgroundColor={Color.orange}
        padding="12px 35px"
      />
      <TextCircle
        text={studyName1}
        color={Color.orange}
        backgroundColor={Color.background}
        border="1px solid"
        borderColor={Color.orange}
        padding="12px 50px"
      />
      <LanguageImage src={pythonIcon} />
      <TextCircle
        text={studyName2}
        color={Color.orange}
        backgroundColor={Color.background}
        border="1px solid"
        borderColor={Color.orange}
        padding="12px 50px"
      />
      <LanguageImage src={cppIcon} />
    </StudyIntroWrapper>
  );
};

export default StudyTableIntro;
