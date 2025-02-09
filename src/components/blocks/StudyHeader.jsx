import styled from "styled-components";
import hiarcLogo from "./../../assets/hiarc-reallogo.png";
import TextCircle from "../atoms/TextCircle";
import Color from "../ui/Color";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin: 10px 0px;
  margin-right: auto;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 48px;
`;

const StudyHeader = () => {
  return (
    <Wrapper>
      <LogoImage src={hiarcLogo} />
      <TextCircle
        text={"학회 스터디"}
        backgroundColor={Color.yellow}
        color={Color.primary}
        padding="13px 28px"
        fontSize="20px"
      />
      <TextCircle
        text={"2024"}
        backgroundColor={Color.orange}
        color={Color.white}
        padding="15px 40px"
      />
    </Wrapper>
  );
};

export default StudyHeader;
