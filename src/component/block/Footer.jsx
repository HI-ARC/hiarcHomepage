import styled from "styled-components";
import reallogo from "./../../assets/hiarc-reallogo.png";
import FontStyle from "../ui/FontStyle";
import ContactInfo from "../atom/MediaListCell";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 800px) {
    align-items: flex-start;
  }
`;

const FooterWrapper = styled.div`
  max-width: 800px;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  color: #00aaff;
  text-align: left;
  margin-top: 50px;
  width: 100%; /* FooterWrapper가 전체 너비를 차지하도록 설정 */
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const IntroduceWrapper = styled.div`
  display: flex;
  font-weight: 100;
  flex: 1; /* IntroduceWrapper가 더 많은 공간을 차지하도록 설정 */
`;

const LogoImage = styled.img`
  width: 40px;
  height: 48px;
  margin-top: 20px;
  margin-right: 20px;
`;

const IntroText = styled.div`
  ${FontStyle.body1Regular}
  white-space: nowrap;
`;

const IntroTitle = styled.h4`
  margin-bottom: 5px;
  ${FontStyle.body1Regular}
  white-space: nowrap;
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterWrapper>
        <IntroduceWrapper>
          <LogoImage src={reallogo} alt="HI-ARC 로고" />
          <IntroWrapper>
            <IntroTitle>HI-ARC 하이아크</IntroTitle>
            <IntroText>홍익대학교 컴퓨터공학과 알고리즘 학회</IntroText>
          </IntroWrapper>
        </IntroduceWrapper>

        <ContactInfo />
      </FooterWrapper>
    </Wrapper>
  );
};

export default Footer;
