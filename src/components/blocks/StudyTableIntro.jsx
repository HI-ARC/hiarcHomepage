import React from "react";
import styled from "styled-components";
import TextCircle from "../atoms/TextCircle";
import Color from "../ui/Color";

const StudyIntroWrapper = styled.div`
  display: flex;
  gap: 18px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-right: auto;
  flex: 1;

  @media (max-width: 800px) {
    gap: 10px;
  }
`;

const LanguageImage = styled.img`
  width: 40px;
  height: 48px;

  @media (max-width: 800px) {
    width: 30px;
    height: 38px;
  }
`;

const StudyTableIntro = ({ semester, studyName, isSemester, icon }) => {
  return (
    <StudyIntroWrapper>
      {isSemester == true && (
        <TextCircle
          text={semester}
          color={Color.white}
          backgroundColor={Color.orange}
        />
      )}
      <TextCircle
        text={studyName}
        color={Color.orange}
        backgroundColor={Color.background}
        border="0.5px solid"
        borderColor={Color.orange}
      />
      <LanguageImage src={icon} />
    </StudyIntroWrapper>
  );
};

export default StudyTableIntro;
