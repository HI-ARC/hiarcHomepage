import React from "react";

interface HeaderMenuButtonProps {
  text: string;
  onClick: () => void;
}

const HeaderMenuButton: React.FC<HeaderMenuButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        text-primary
        subhead3ExtraBold
        bg-transparent
        border-none
        cursor-pointer
        px-2
        py-1
        rounded-md
        transition
        duration-500
        hover:bg-primary
        hover:text-white
      `}
    >
      {text}
    </button>
  );
};

export default HeaderMenuButton;
