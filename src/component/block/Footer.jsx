import styled from "styled-components";
import reallogo from "./../../assets/hiarc-reallogo.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  width: 100%; /* FooterWrapper가 전체 너비를 차지하도록 설정 */
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
  font-weight: 200;
  font-size: 10px;
`;

const IntroTitle = styled.h4`
  margin-bottom: 5px;
  font-weight: 500;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const MediaList = styled.div`
  text-align: right;
`;

const MiddleDivider = styled.div`
  padding: 0 5px;
`;

const WantList = styled.div``;

const Footer = () => {
  return (
    <Wrapper >
      <FooterWrapper >
        <IntroduceWrapper >
          <LogoImage src={reallogo} alt="HI-ARC 로고" />
          <div className="intro">
            <IntroTitle>HI-ARC 하이아크</IntroTitle>
            <IntroText>홍익대학교 컴퓨터공학과 알고리즘 학회</IntroText>
          </div>
        </IntroduceWrapper >

        <ContactWrapper >
          <MediaList >
            <div>instagram</div>
            <div>email</div>
            <div>kakao</div>
          </MediaList >
          <MiddleDivider>
            <div> |</div>
            <div> |</div>
            <div> |</div>
          </MiddleDivider >
          <WantList >
            <div>@hi-arc.official</div>
            <div>hiarc.offcial@gmail.com</div>
            <div>@hi-arc</div>
          </WantList >
        </ContactWrapper >
      </FooterWrapper >
    </Wrapper >
  );
};

export default Footer;