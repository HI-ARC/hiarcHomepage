// src/components/MobileCircleContainer.tsx
import React from "react";
import Color from "../../ui/Color";

interface MobileCircleContainerProps {
  color: string;
  contentColor?: string;
  size: number;
  isHovered?: boolean;
  animate?: boolean;
  children: React.ReactNode;
}

const MobileCircleContainer: React.FC<MobileCircleContainerProps> = ({
  color,
  contentColor = Color.primary,
  size,
  children,
  isHovered = true,
  animate = false,
}) => {
  return (
    <div
      style={{ width: size, height: size, backgroundColor: color }}
      className="flex justify-center items-center rounded-full"
    >
      <div
        style={{
          color: contentColor,
          opacity: isHovered ? 1 : 0,
          fontSize: "clamp(0rem, calc((100vw - 10.4rem) * 0.086), 4rem)",
          wordSpacing: "-0.1rem",
          letterSpacing: "-0.07em",
        }}
        className={`flex rounded-full justify-center items-center transition-opacity duration-500 display1ExtraBold ${
          animate ? (isHovered ? "animate-fadeIn" : "animate-fadeOut") : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default MobileCircleContainer;
