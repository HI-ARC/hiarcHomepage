import React, { useState } from "react";
import SectionGridView from "../organisms/section/SectionGridView";
import ToggleIcon from "@/assets/icon/toggle_icon.svg?react";

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
    <section
      className={`flex w-full gap-8 pt-16 flex-col items-center ${
        align === "right"
          ? "sm:flex-row-reverse sm:items-start"
          : "sm:flex-row sm:items-start"
      }`}
    >
      {/* 그리드 뷰 */}
      <div className="flex-1">
        <SectionGridView
          rowCount={rowCount}
          colCount={colCount}
          bottomLayerData={bottomLayerData}
          topLayerData={topLayerData}
        />
      </div>

      {/* 오른쪽 컨텐츠 */}
      <div className="flex flex-col">
        <p className="text-[clamp(14px,2vw,18px)] font-NanumSquareNeo mb-2">
          {contentText}
        </p>

        {/* ✅ showToggle이 true일 때만 토글 버튼 표시 */}
        {showToggle && (
          <button
            className="flex items-center p-3 border-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <ToggleIcon
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
              width="clamp(12px, 5vw, 24px)"
              height="clamp(12px, 5vw, 24px)"
            />
            <span className="text-[clamp(14px,2vw,18px)] font-NanumSquareNeoExtraBold font-extrabold text-primary pl-2">
              {toggleText}
            </span>
          </button>
        )}

        {/* 토글이 있는 경우 isOpen에 따라 children 표시, 없는 경우 항상 표시 */}
        <div
          className={`transition-all overflow-hidden ${
            showToggle
              ? isOpen
                ? "max-h-full opacity-100 py-2"
                : "max-h-0 opacity-0"
              : "max-h-full opacity-100 py-2"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionTemplate;
