import FontStyle from "@/components/ui/FontStyle";
import Colors from "@/constants/ui/Colors";
import React from "react";
import styled from "styled-components";

interface AssetImageProps {
  src: string;
  maxWidth?: number | string;
  minWidth?: number | string;
  height?: number | string;
  padding?: number | string;
  caption?: string;
}

// 숫자는 px 단위로, 문자열은 그대로 반환하는 헬퍼 함수
const parseValue = (value: number | string): string =>
  typeof value === "number" ? `${value}px` : value;

const Container = styled.div<{ padding: number | string }>`
  position: relative;
  padding: ${({ padding }) => parseValue(padding)};
`;

interface StyledImageProps {
  $maxWidth: number | string;
  $minWidth?: number | string;
  height: number | string;
}

const StyledImage = styled.img<StyledImageProps>`
  object-fit: contain;
  height: ${({ height }) => parseValue(height)};
  max-height: 100%;
  width: 100%;
  max-width: ${({ $maxWidth }) => parseValue($maxWidth)};
  ${({ $minWidth }) => $minWidth && `min-width: ${parseValue($minWidth)};`}
`;

const Caption = styled.div`
  ${FontStyle.body1Medium}
  position: absolute;
  bottom: -2rem;
  color: ${Colors.primary};
  padding-top: 2.5rem;
`;

const AssetImage: React.FC<AssetImageProps> = ({
  src,
  maxWidth = "100%",
  minWidth,
  height = "auto",
  padding = "0",
  caption,
}) => {
  return (
    <Container padding={padding}>
      <StyledImage
        src={src}
        $maxWidth={maxWidth}
        $minWidth={minWidth}
        height={height}
        alt="Asset"
      />
      {caption && <Caption>{caption}</Caption>}
    </Container>
  );
};

export default AssetImage;
