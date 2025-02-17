import FontStyle from "@/components/ui/FontStyle";
import Colors from "@/constants/ui/Colors";
import React from "react";
import styled from "styled-components";
import ContentText from "../text/ContentText";

interface AssetImageProps {
  src: string;
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  height?: number | string;
  padding?: number | string;
  borderRadius?: number | string;
  caption?: string;
}

const parseValue = (value: number | string): string =>
  typeof value === "number" ? `${value}px` : value;

const Container = styled.div<{ padding: number | string }>`
  position: relative;
  padding: ${({ padding }) => parseValue(padding)};
`;

interface StyledImageProps {
  width?: number | string;
  $maxWidth?: number | string;
  $minWidth?: number | string;
  height: number | string;
  borderRadius?: number | string;
}

const StyledImage = styled.img<StyledImageProps>`
  object-fit: cover;
  height: ${({ height }) => parseValue(height)};
  max-height: 100%;
  ${({ width }) => width && `width: ${parseValue(width)};`}
  ${({ $maxWidth }) => $maxWidth && `max-width: ${parseValue($maxWidth)};`}
  ${({ $minWidth }) => $minWidth && `min-width: ${parseValue($minWidth)};`}
  ${({ borderRadius }) =>
    borderRadius && `border-radius: ${parseValue(borderRadius)};`}
`;

const Caption = styled.div`
  ${FontStyle.body1Medium}
  font-size: clamp(8px, 2vw, 14px);
  position: absolute;
  bottom: -clamp(0px, 2vw, 10px);
  color: ${Colors.primary};
  padding-top: 4px;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

const AssetImage: React.FC<AssetImageProps> = ({
  src,
  width,
  maxWidth,
  minWidth,
  height = "auto",
  padding = "0",
  borderRadius = "0",
  caption,
}) => {
  return (
    <Container padding={padding}>
      <StyledImage
        src={src}
        width={width}
        $maxWidth={maxWidth}
        $minWidth={minWidth}
        height={height}
        borderRadius={borderRadius}
        alt={caption}
      />

      {caption && <Caption>{caption}</Caption>}
    </Container>
  );
};

export default AssetImage;
