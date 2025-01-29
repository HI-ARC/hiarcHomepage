import styled from "styled-components";
import AssetImage from "../atom/AssetImage";

const ContainerStyle = styled.div`
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  /* 🎯 화면 크기가 800px 이하일 때 세로 정렬 */
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center; /* 중앙 정렬 */
  }
`;

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
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
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </ContainerStyle>
    );

  return (
    <ContainerStyle>
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <AssetImage src={imgSrc} width={width} maxWidth={maxWidth} />
    </ContainerStyle>
  );
};

export default SideImageLayout;
