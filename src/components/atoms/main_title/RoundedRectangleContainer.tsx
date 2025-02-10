// src/components/RoundedRectangleContainer.tsx
import React from "react";
import Color from "../../ui/Color";
// FontStyle를 Tailwind 커스텀 클래스(`display1ExtraBold`)로 대체한다고 가정합니다.

interface RoundedRectangleContainerProps {
  color: string;
  width: number;
  height: number;
  text: string;
}

const RoundedRectangleContainer: React.FC<RoundedRectangleContainerProps> = ({
  color,
  width,
  height,
  text,
}) => {
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
          color: Color.primary,
          fontSize: "clamp(0rem, calc((100vw - 10.4rem) * 0.043), 4.3rem)",
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

export default RoundedRectangleContainer;
