import React from "react";

interface AssetImageProps {
  src: string;
  maxWidth?: number | string;
  height?: number | string;
  padding?: number | string;
  caption?: string;
}

const AssetImage: React.FC<AssetImageProps> = ({
  src,
  maxWidth = "w-full",
  height = "h-auto",
  padding = "p-0",
  caption,
}) => {
  // Tailwind 클래스로 변환하는 함수
  const getSizeClass = (value: number | string): string => {
    if (typeof value === "number") {
      return `h-[${value}px] max-h-full`;
    }
    return value === "h-auto" ? "h-full" : `${value} max-h-full`;
  };

  const getWidthClass = (value: number | string): string => {
    if (typeof value === "number") {
      return `max-w-[${value}px] w-full`;
    }
    return value === "w-full" ? "w-full max-w-full" : `max-w-[${value}px]`;
  };

  const getPaddingClass = (value: number | string): string => {
    if (typeof value === "number") {
      return `p-[${value}px]`;
    }
    return value;
  };

  return (
    <div className={`relative ${getPaddingClass(padding)}`}>
      <img
        src={src}
        className={`object-contain ${getSizeClass(height)} ${getWidthClass(maxWidth)}`}
        alt="Asset"
      />
      {caption && (
        <div className="absolute bottom-2 text-primary captionRegular pt-10">
          {caption}
        </div>
      )}
    </div>
  );
};

export default AssetImage;
