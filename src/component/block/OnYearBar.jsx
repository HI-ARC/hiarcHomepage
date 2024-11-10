import React from "react";
import TextCircle from "../atom/TextCircle";
import styled from "styled-components";
import Color from "../ui/Color";

const OnYearBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  max-width: 750px;
  margin-bottom: 15px;
`;

const OnYearBar = () => {
  return (
    <OnYearBarWrapper>
      <TextCircle text="수상경력" borderColor={Color.black} />
      <div>picture</div>
    </OnYearBarWrapper>
  );
};

export default OnYearBar;
