import styled from "styled-components";
import Color from "../../ui/Color";
import FontStyle from "../../ui/FontStyle";

const ButtonContainerStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${prop => prop.width}px;
  height: ${prop => prop.height}px;
  border-radius: ${prop => prop.height}px;
  background-color: ${prop => prop.color};
  border: none;
`;

const ButtonTextStyle = styled.div`
  color: ${Color.white};
  ${FontStyle.display1Heavy}
`;

const MenuButton = ({ color = Color.primary, buttonText, width, height, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <ButtonContainerStyle
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          color={color}
          width={width}
          height={height}
          onClick={onClick}  >
      <ButtonTextStyle>
        {buttonText}
      </ButtonTextStyle>
    </ButtonContainerStyle>
  );
}

export default MenuButton;