import styled from "styled-components";
import AssetImage from "../atom/AssetImage";

const ContainerStyle = styled.div`
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const SideImageLayout = ({
  imgSrc,
  width,
  maxWidth,
  isLeft = true,
  children,
  isToggleBar = true,
}) => {
  if (isToggleBar && !isLeft)
    return (
      <ContainerStyle>
        <ChildrenWrapper>{children}</ChildrenWrapper>
        <AssetImage src={imgSrc} width={width} maxWidth={maxWidth} />
      </ContainerStyle>
    );

  if (isLeft)
    return (
      <ContainerStyle>
        <AssetImage src={imgSrc} width={width} maxWidth={maxWidth} />
        {children}
      </ContainerStyle>
    );

  return (
    <ContainerStyle>
      {children}
      <AssetImage src={imgSrc} width={width} maxWidth={maxWidth} />
    </ContainerStyle>
  );
};

export default SideImageLayout;
