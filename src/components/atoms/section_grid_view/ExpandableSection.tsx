import React, { useState, useRef } from "react";
import ToggleIcon from "@/assets/icon/toggle_icon.svg?react";

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      {/* 토글 버튼 */}
      <button
        className="flex items-center w-full p-3 border-b border-gray-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* 아이콘 */}
        <ToggleIcon
          width="clamp(16px, 5vw, 24px)"
          height="clamp(16px, 5vw, 24px)"
          fill="#000"
          className={`transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        />

        {/* 텍스트 */}
        <span className="flex-1 text-[clamp(14px,2vw,18px)] font-NanumSquareNeo ml-2">
          {title}
        </span>
      </button>

      {/* 내용 */}
      <div
        ref={contentRef}
        className="transition-all overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
          paddingTop: isOpen ? "8px" : "0px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ExpandableSection;
