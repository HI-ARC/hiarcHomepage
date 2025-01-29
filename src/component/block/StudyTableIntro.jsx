import React from "react";
import styled from "styled-components";
import TextCircle from "../atom/TextCircle";
import Color from "../ui/Color";

const StudyIntroWrapper = styled.div`
  display: flex;
  gap: 18px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-right: auto;
  flex: 1;
`;

const LanguageImage = styled.img`
  width: 40px;
  height: 48px;
`;

const StudyTableIntro = ({ semester, studyName, isSemester, icon }) => {
  return (
    <StudyIntroWrapper>
      {isSemester == true && (
        <TextCircle
          text={semester}
          color={Color.white}
          backgroundColor={Color.orange}
          padding="12px 35px"
        />
      )}
      <TextCircle
        text={studyName}
        color={Color.orange}
        backgroundColor={Color.background}
        border="0.5px solid"
        borderColor={Color.orange}
        padding="12px 50px"
      />
      <LanguageImage src={icon} />
    </StudyIntroWrapper>
  );
};

export default StudyTableIntro;
