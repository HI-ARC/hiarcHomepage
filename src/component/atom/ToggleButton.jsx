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
`;

const DropdownMenu = styled.div`
  width: 500px;
  background-color: #fffced;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  padding: 5px;
  text-align: left;
  line-height: 1.75;
  max-height: ${(props) => (props.visible ? "300px" : 0)};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
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

      <DropdownMenu visible={menuVisible}>
        {typeof innerText === "function" ? innerText() : innerText}
      </DropdownMenu>
    </Wrapper>
  );
};

export default ToggleButton;
