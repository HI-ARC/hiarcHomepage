import toggleImg from "../../assets/toggleButton.png";
import styled from "styled-components";
import {useState} from "react";

const OutWrapper = styled.div`
  display: flex;
  font-size: 18px;
  height: 25px;
  align-items: center;
  color: #00aaff;
  font-weight: 800;

  img {
    vertical-align: middle;
    height: 25px;
    margin-right: 4px;
    cursor: pointer; /* 클릭 가능한 커서 */
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative; /* 드롭다운이 이 요소 안에서 배치 */
  overflow: visible;
`;

const DropdownMenu = styled.div`
  width: 500px;
  background-color: #fffced;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  padding: 5px;

  display: ${(props) => (props.visible ? "block" : "none")};
  text-align: left;
`;

const ToggleButton = ({text, innerText}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Wrapper>
      <OutWrapper>
        <img src={toggleImg} alt="Introduce HIARC" onClick={toggleMenu} />
        {text}
      </OutWrapper>
      {menuVisible && (
        <DropdownMenu visible={menuVisible}>
          {typeof innerText === "function" ? innerText() : innerText}
        </DropdownMenu>
      )}
    </Wrapper>
  );
};

export default ToggleButton;
