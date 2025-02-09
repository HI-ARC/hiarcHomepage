import React from "react";

interface AssetImageProps {
  src: string;
  maxWidth?: number | string;
  height?: number | string;
}

const AssetImage: React.FC<AssetImageProps> = ({
  src,
  maxWidth = 800,
  height = "h-auto",
}) => {
  // Tailwind 클래스로 변환하는 함수
  const getSizeClass = (value: number | string): string => {
    if (typeof value === "number") {
      return `h-[${value}px] max-h-full`;
    }
    return `${value} max-h-full`;
  };

  return (
    <img
      src={src}
      className={`object-contain ${getSizeClass(height)} max-w-[${maxWidth}px]`}
      alt="Asset"
    />
  );
};

export default AssetImage;
