import React from "react";

const HiTingButton: React.FC = () => {
  return (
    <a
      href="http://hi-arc.quest/home/"
      className={`
      text-primary
      subhead3ExtraBold
      px-4
      py-2
      rounded-md
      hover:bg-primary
      hover:text-white
      transition
      duration-300
    `}
    >
      하이팅
    </a>
  );
};

export default HiTingButton;
