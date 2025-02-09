import React from "react";
import SectionGridView from "../organisms/section/SectionGridView";

interface SectionTemplateProps {
  colCount: number;
  rowCount: number;
  bottomLayerData: any[];
  topLayerData: any[];

  align?: "left" | "right"; // SectionGridView의 위치 선택 가능
  children?: React.ReactNode;
}

const SectionTemplate: React.FC<SectionTemplateProps> = ({
  colCount,
  rowCount,
  bottomLayerData,
  topLayerData,
  align = "left", // 기본값: 왼쪽 정렬
  children,
}) => {
  return (
    <section
      className={`flex w-full gap-8 flex-col sm:flex-row ${
        align === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <SectionGridView
        rowCount={rowCount}
        colCount={colCount}
        bottomLayerData={bottomLayerData}
        topLayerData={topLayerData}
      />
      {children}
    </section>
  );
};

export default SectionTemplate;
