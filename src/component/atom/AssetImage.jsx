import styled from "styled-components";
import SizeValue from "../ui/SizeValue";

// 단위를 자동으로 추가해주는 함수
const addUnit = value => {
  return typeof value === "number" ? `${value}px` : value;
};

const ImageStyle = styled.img`
  max-width: ${(props) => addUnit(props.maxWidth)};
  width: ${(props) => addUnit(props.width)};
  height: auto;
  object-fit: cover;
`;

const AssetImage = ({ src, maxWidth = 800, width = SizeValue.width.full }) => {
  return <ImageStyle src={src} maxWidth={maxWidth} width={width} />;
}

export default AssetImage;