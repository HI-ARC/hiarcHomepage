// src/components/MenuButton.tsx
import Color from "@/components/ui/Color";
import React from "react";

interface MenuButtonProps {
  color?: string; // 예: Color.primary
  buttonText: string;
  width: number;
  height: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  color = Color.primary,
  buttonText,
  width,
  height,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${height}px`,
        backgroundColor: color,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex justify-center items-center cursor-pointer border-none"
    >
      <div
        className="text-white"
        style={{
          fontSize: "clamp(0rem, calc((100vw - 10.4rem) * 0.036), 3.6rem)",
          fontWeight: 700,
          fontFamily: '"NanumSquareNeoHeavy"',
          wordSpacing: "-0.1rem",
          letterSpacing: "-0.07em",
        }}
      >
        {buttonText}
      </div>
    </button>
  );
};

export default MenuButton;
