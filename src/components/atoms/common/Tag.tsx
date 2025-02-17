import React from "react";
import styled from "styled-components";
import Color from "../../ui/Color";
import FontStyle from "../../ui/FontStyle";

interface TagProps {
  text: string;
}

const StyledTag = styled.div`
  padding: clamp(4px, 2vw, 8px) clamp(5px, 2vw, 10px);
  border: 0.5px solid ${Color.primary};
  border-radius: 100px;
  background-color: ${Color.transparent};
  color: ${Color.primary};
  ${FontStyle.body1Regular}
  font-size: clamp(14px, 2vw, 18px);
`;

const Tag: React.FC<TagProps> = ({ text }) => {
  return <StyledTag>{text}</StyledTag>;
};

export default Tag;
