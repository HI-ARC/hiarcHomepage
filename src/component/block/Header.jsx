import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import TextButton from "../atom/TextButton";
import {useState} from "react";

///위에까지가 에니메이션
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

const DropdownMenu = styled.div`
  position: absolute;
  width: 120px;
  top: 100%;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;
  text-align: left;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(-10px)"};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

const MenuItem = styled.div`
  margin: 0 10px;
  color: #00aaff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
const MenuButton = styled.div`
  font-size: 24px;
  cursor: pointer;
  color: #00aaff;
`;

const RightWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

///여기서 부터 코드

const Header = () => {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <HeaderStyle>
      <ContentStyle>
        <TextButton text={"HI-ARC"} onClick={() => navigate("/")}>
          {" "}
        </TextButton>
        <RightWrapper>
          <AnkerStyle href="http://hi-arc.quest/home/">하이팅</AnkerStyle>
          <MenuButton onClick={toggleMenu}>☰</MenuButton>
          <DropdownMenu visible={menuVisible}>
            <MenuItem onClick={() => navigate("/introduce_hiarc")}>
              학회소개
            </MenuItem>
            <MenuItem onClick={() => navigate("/activity")}>학회 활동</MenuItem>
            <MenuItem onClick={() => navigate("/study")}>스터디</MenuItem>
          </DropdownMenu>
        </RightWrapper>
      </ContentStyle>
    </HeaderStyle>
  );
};

export default Header;
