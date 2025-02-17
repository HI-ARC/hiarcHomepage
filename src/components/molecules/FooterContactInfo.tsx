import React from "react";
import styled from "styled-components";
import FooterContactText from "@/components/atoms/footer/FooterContactText";

const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px; /* equivalent to Tailwind's gap-2 */
`;

const ColumnEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ColumnStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FooterContactInfo: React.FC = () => {
  return (
    <OuterContainer>
      <ColumnEnd>
        <FooterContactText text="instagram" />
        <FooterContactText text="email" />
        <FooterContactText text="kakao" />
      </ColumnEnd>
      <ColumnEnd>
        <FooterContactText text="|" />
        <FooterContactText text="|" />
        <FooterContactText text="|" />
      </ColumnEnd>
      <ColumnStart>
        <FooterContactText text="@hi.arc.official" />
        <FooterContactText text="hiarc.official@gmail.com" />
        <FooterContactText text="@hi-arc" />
      </ColumnStart>
    </OuterContainer>
  );
};

export default FooterContactInfo;
