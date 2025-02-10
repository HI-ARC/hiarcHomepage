import React from "react";

interface AssetImageProps {
  src: string;
  maxWidth?: number | string;
  minWidth?: number | string;
  height?: number | string;
  padding?: number | string;
  caption?: string;
}

const AssetImage: React.FC<AssetImageProps> = ({
  src,
  maxWidth = "w-full",
  minWidth,
  height = "h-auto",
  padding = "p-0",
  caption,
}) => {
  // Tailwind 클래스로 변환하는 함수들
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

  const getMinWidthClass = (value: number | string): string => {
    if (typeof value === "number") {
      return `min-w-[${value}px]`;
    }
    return value === "w-full" ? "min-w-full" : value;
  };

  const getPaddingClass = (value: number | string): string => {
    if (typeof value === "number") {
      return `p-[${value}px]`;
    }
    return value;
  };

  // 인라인 스타일로 minWidth를 강제 적용
  const minWidthStyle = minWidth
    ? { minWidth: typeof minWidth === "number" ? `${minWidth}px` : minWidth }
    : {};

  return (
    <div className={`relative ${getPaddingClass(padding)}`}>
      <img
        src={src}
        style={minWidthStyle}
        className={`object-contain ${getSizeClass(height)} ${getWidthClass(
          maxWidth
        )} ${minWidth ? getMinWidthClass(minWidth) : ""}`}
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
