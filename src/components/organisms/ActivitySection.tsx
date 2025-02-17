import React from "react";
import styled from "styled-components";
import Tag from "../atoms/common/Tag";
import FontStyle from "../ui/FontStyle";
import Color from "../ui/Color";
import ContentText from "../atoms/text/ContentText";

interface ActivitySectionProps {
  tagList: string[];
  title: string;
  content: string;
}

const ActivitySectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 65px;
`;

const TitleSection = styled.div`
  ${FontStyle.display1ExtraBold}
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TitleStyle = styled.div`
  ${FontStyle.display1ExtraBold}
  font-size: clamp(16px, 2vw, 20px);
  color: ${Color.primary};
`;

const ActivitySection: React.FC<ActivitySectionProps> = ({
  tagList,
  title,
  content,
}) => (
  <ActivitySectionStyle>
    <TitleSection>
      <TitleStyle>{title}</TitleStyle>
      {tagList.map((tag) => (
        <Tag text={tag} key={tag} />
      ))}
    </TitleSection>
    <ContentText text={content} />
  </ActivitySectionStyle>
);

export default ActivitySection;
