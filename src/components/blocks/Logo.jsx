import styled from "styled-components";
import logo from "../../assets/hiarc-logo.png";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";
import AssetImage from "../atoms/image/AssetImage";

const LogoWrapperStyle = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  padding: 40px 0px;
  flex-direction: column;
`;

const OriginTextStyle = styled.section`
  ${FontStyle.captionMedium}
  padding-top: 12px;
  color: ${Color.primary};
`;

const Logo = () => {
  return (
    <LogoWrapperStyle>
      <AssetImage src={logo} alt="HI-ARC Logo" />
      <OriginTextStyle>@제 1회 하이콘 대회 배경</OriginTextStyle>
    </LogoWrapperStyle>
  );
};

export default Logo;
