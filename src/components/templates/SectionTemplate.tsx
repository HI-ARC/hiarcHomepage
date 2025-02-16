import React, { useState } from "react";
import styled from "styled-components";
import ToggleIcon from "@/assets/icon/toggle_icon.svg?react";
import ColoredGridView from "../organisms/colored_grid_view/ColoredGridView";
import FontStyle from "../ui/FontStyle";
import Color from "../ui/Color";
import ContentText from "../atoms/text/ContentText";

interface SectionTemplateProps {
  colCount: number;
  rowCount: number;
  bottomLayerData: any[];
  topLayerData: any[];
  contentText: string;
  toggleText?: string;
  showToggle?: boolean;
  align?: "left" | "right";
  children?: React.ReactNode;
}

const SectionContainer = styled.section<{ align: "left" | "right" }>`
  display: flex;
  width: 100%;
  gap: 24px;
  padding-top: 54px;

  flex-direction: column;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: ${({ align }) =>
      align === "right" ? "row-reverse" : "row"};
    align-items: flex-start;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;
  border: none;
  background: none;
  cursor: pointer;
`;

const ToggleIconStyled = styled(ToggleIcon)<{ isOpen: boolean }>`
  transition: transform 0.3s;
  transform: ${({ isOpen }) => (isOpen ? "rotate(-90deg)" : "rotate(0deg)")};
  width: clamp(12px, 5vw, 24px);
  height: clamp(12px, 5vw, 24px);
`;

const ToggleText = styled.span`
  ${FontStyle.display1ExtraBold}
  font-size: clamp(14px, 2vw, 18px);
  margin-left: 8px;
  color: ${Color.primary};
`;

const ToggleContent = styled.div<{ isOpen: boolean }>`
  transition:
    max-height 0.3s,
    opacity 0.3s;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

  text-align: left;
  line-height: 1.5;
`;

const SectionTemplate: React.FC<SectionTemplateProps> = ({
  colCount,
  rowCount,
  bottomLayerData,
  topLayerData,
  contentText,
  toggleText,
  showToggle = false,
  align = "left",
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionContainer align={align}>
      <div style={{ display: "flex" }}>
        <ColoredGridView
          maxWidth={250}
          minWidth={150}
          rowCount={rowCount}
          colCount={colCount}
          bottomLayerGridData={bottomLayerData}
          topLayerGridData={topLayerData}
        />
      </div>
      <ContentContainer>
        <ContentText text={contentText}></ContentText>
        {showToggle && (
          <ToggleButton
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <ToggleIconStyled isOpen={isOpen} />
            <ToggleText>{toggleText}</ToggleText>
          </ToggleButton>
        )}
        <ToggleContent isOpen={isOpen || !showToggle}>{children}</ToggleContent>
      </ContentContainer>
    </SectionContainer>
  );
};

export default SectionTemplate;
