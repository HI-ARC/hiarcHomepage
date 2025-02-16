import React from "react";
import styled from "styled-components";
import Colors from "@/constants/ui/Colors";
import FontStyle from "@/components/ui/FontStyle";

interface FooterContactTextProps {
  text: string;
}

const StyledFooterContactText = styled.div`
  color: ${Colors.primary};
  ${FontStyle.captionRegular}
`;

const FooterContactText: React.FC<FooterContactTextProps> = ({ text }) => {
  return <StyledFooterContactText>{text}</StyledFooterContactText>;
};

export default FooterContactText;
