import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextButton from "../atom/TextButton";

const HeaderStyle = styled.div`
  color: #00aaff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 800;
  padding: 30px 0px;
  width: 100%;
`;

const ContentStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 650px) {
    text-align: center; /* 가운데 정렬 */
  }
`;

const AnkerStyle = styled.a`
  text-decoration: none;
  color: #00aaff;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyle>
      <ContentStyle>
        <TextButton text={"HI-ARC"} onClick={() => navigate("/")}>
          {" "}
        </TextButton>
        <AnkerStyle href="http://hi-arc.quest/home/"> 하이팅 </AnkerStyle>
      </ContentStyle>
    </HeaderStyle>
  );
};

export default Header;
