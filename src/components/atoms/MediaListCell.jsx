import React from "react";
import styled from "styled-components";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 18px;
  font-weight: 500;
  color: ${Color?.primary || "#42a5f5"};
  background-color: #fffdf0;
  padding: 10px;
  width: 100%;
  @media (max-width: 800px) {
    align-items: flex-start;
  }
`;

const ContactItem = styled.div`
  ${() => FontStyle.body1Regular} /* ✅ 올바른 적용 방식 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;

  @media (max-width: 800px) {
    align-items: flex-start;
    gap: 5px;
  }
`;

const ContactType = styled.span`
  text-align: right;
  width: 50%;

  @media (max-width: 800px) {
    text-align: left;
    width: 25%;
  }
`;

const Divider = styled.span`
  text-align: center;
  width: 10px;
  color: ${Color?.primary || "#42a5f5"};
`;

const ContactValue = styled.span`
  text-align: left;
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const ContactInfo = () => {
  return (
    <ContactContainer>
      <ContactItem>
        <ContactType>instagram</ContactType>
        <Divider>|</Divider>
        <ContactValue>@hi-arc.official</ContactValue>
      </ContactItem>
      <ContactItem>
        <ContactType>email</ContactType>
        <Divider>|</Divider>
        <ContactValue>hiarc.official@gmail.com</ContactValue>
      </ContactItem>
      <ContactItem>
        <ContactType>kakao</ContactType>
        <Divider>|</Divider>
        <ContactValue>@hi-arc</ContactValue>
      </ContactItem>
    </ContactContainer>
  );
};

export default ContactInfo;
