import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextButton from "../atom/TextButton";
import { useState, useEffect } from "react";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";

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
  box-sizing: border-box;
`;

const AnkerStyle = styled.a`
  text-decoration: none;
  ${FontStyle.display1Bold}
  color: ${Color.primary};
  padding: 4px 8px;
  border-radius: 8px;

  &:hover {
    background-color: ${Color.primary};
    color: white;
    transition: 0.5s;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
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
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 1000;
  text-align: left;
`;

const MenuItem = styled.div`
  margin: 10px 0;
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

const Header = () => {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 800);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <HeaderStyle>
      <ContentStyle>
        <TextButton text={"HI-ARC"} onClick={() => navigate("/")} />

        {/* 너비 800px 이상: 메뉴들이 일렬로 보이게 */}
        {isDesktop ? (
          <MenuWrapper>
            <TextButton
              text="학회소개"
              onClick={() => navigate("/introduce_hiarc")}
            />
            <TextButton
              text="학회 활동"
              onClick={() => navigate("/activity")}
            />
            <TextButton text="스터디" onClick={() => navigate("/study")} />
            <AnkerStyle href="http://hi-arc.quest/home/">하이팅</AnkerStyle>
          </MenuWrapper>
        ) : (
          /* 너비 800px 이하: 드롭다운 메뉴 */
          <DropdownWrapper>
            <MenuButton onClick={toggleMenu}>☰</MenuButton>
            <DropdownMenu visible={menuVisible}>
              <MenuItem onClick={() => navigate("/introduce_hiarc")}>
                학회소개
              </MenuItem>
              <MenuItem onClick={() => navigate("/activity")}>
                학회 활동
              </MenuItem>
              <MenuItem onClick={() => navigate("/study")}>스터디</MenuItem>
            </DropdownMenu>
          </DropdownWrapper>
        )}
      </ContentStyle>
    </HeaderStyle>
  );
};

export default Header;
