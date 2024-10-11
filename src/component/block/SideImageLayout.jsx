import styled from "styled-components";
import AssetImage from "../atom/AssetImage";

const ContainerStyle = styled.div`
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SideImageLayout = ({imgSrc, width, maxWidth, isLeft = true, children}) => {
  if (isLeft)
    return (
      <ContainerStyle >
        <AssetImage src={imgSrc} width={width} maxWidth={maxWidth} />
        {children}
      </ContainerStyle >
    );
  
  return (
    <ContainerStyle >
      {children}
      <AssetImage src={imgSrc} width={width} maxWidth={maxWidth} />
    </ContainerStyle >
  );
};

export default SideImageLayout;
