// src/components/SectionRoundedRectangleContainer.tsx
import React from "react";
import Color from "../../ui/Color";
// FontStyle를 Tailwind 커스텀 클래스(`display1ExtraBold`)로 대체한다고 가정합니다.

interface SectionRoundedRectangleContainerProps {
  color: string;
  width: number;
  height: number;
  text: string;
  textColor?: string;
}

const SectionRoundedRectangleContainer: React.FC<
  SectionRoundedRectangleContainerProps
> = ({ color, width, height, text, textColor = Color.primary }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${height}px`,
        backgroundColor: color,
      }}
      className="flex justify-center items-center"
    >
      <div
        style={{
          color: textColor,
          fontSize: "clamp(2rem, calc((100vw - 6rem) * 0.034), 2.8rem)",
          wordSpacing: "-0.1rem",
          letterSpacing: "-0.07em",
        }}
        className="display1ExtraBold" // Tailwind 커스텀 폰트 스타일 클래스
      >
        {text}
      </div>
    </div>
  );
};

export default SectionRoundedRectangleContainer;
