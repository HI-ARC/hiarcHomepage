import React from "react";
import styled from "styled-components";
import TextCircle from "../atom/TextCircle";
import Color from "../ui/Color";
import pythonIcon from "./../../assets/python 3.png";
import cppIcon from "./../../assets/c++icon.png";

const Wrapper = styled.div`
  display: flex;
`;

const StudyIntroWrapper = styled.div`
  display: flex;
  gap: 18px;
  justify-content: ;
  align-items: center;
  padding-right: 12%;
`;

const LanguageImage = styled.img`
  width: 40px;
  height: 48px;
`;

const StudyTable2024_1 = ({ semester, studyName1, studyName2 }) => {
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

export default StudyTable2024_1;
