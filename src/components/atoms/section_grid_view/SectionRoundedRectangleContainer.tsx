import React from "react";
import Color from "../../ui/Color";
import NavigateArrow from "@/assets/icon/navigate_arrow.svg?react";

interface SectionRoundedRectangleContainerProps {
  color: string;
  width: number;
  height: number;
  text: string;
  textColor?: string;
  isButton?: boolean;
  onClick?: () => void;
}

const SectionRoundedRectangleContainer: React.FC<
  SectionRoundedRectangleContainerProps
> = ({
  color,
  width,
  height,
  text,
  textColor = Color.primary,
  isButton = false,
  onClick,
}) => {
  return (
    <div
      onClick={isButton ? onClick : undefined}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${height}px`,
        backgroundColor: color,
      }}
      className={`flex items-center ${isButton ? "cursor-pointer" : ""}`}
    >
      {/* 텍스트 영역: 화살표가 차지하는 영역을 제외한 나머지 공간에서 중앙 정렬 */}
      <div className="flex-1 flex justify-center items-center">
        <span
          style={{
            color: textColor,
            fontSize: "clamp(2.4rem, calc((100vw - 6rem) * 0.034), 2.7rem)",
            wordSpacing: "-0.1rem",
            letterSpacing: "-0.07em",
          }}
          className="display1ExtraBold"
        >
          {text}
        </span>
      </div>
      {/* 화살표 영역: isButton이 true일 때만, 오른쪽에 고정된 폭으로 배치 */}
      {isButton && (
        <div className="w-[35px] mr-4 flex items-center justify-center">
          <NavigateArrow width="40px" height="40px" />
        </div>
      )}
    </div>
  );
};

export default SectionRoundedRectangleContainer;
