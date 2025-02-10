import toggleImg from "../../assets/toggleButton.png";
import styled from "styled-components";
import { useState } from "react";
import FontStyle from "../ui/FontStyle";

const OutWrapper = styled.div`
  display: flex;
  ${FontStyle.body1Medium}
  height: 25px;
  align-items: center;
  color: #00aaff;
  gap: 5px;

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
  border: none;
  border-radius: 8px;
  padding: 5px;
  line-height: 1.6;
  display: ${(props) => (props.visible ? "block" : "none")};
  ${FontStyle.body1Regular}
`;

const ToggleButton = ({ text, innerText }) => {
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
