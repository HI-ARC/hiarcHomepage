import styled from "styled-components";
import FontStyle from "../../ui/FontStyle";
import Color from "../../ui/Color";

const RoundedRectangleContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${prop => prop.width}px;
  height: ${prop => prop.height}px;
  border-radius: ${prop => prop.height}px;
  background-color: ${prop => prop.color};
`;

const TextStyle = styled.div`
  color: ${Color.primary};
  ${FontStyle.display1ExtraBold}
`;

const RoundedRectangleContainer = ({ color, width, height, text }) => {
  return (
    <RoundedRectangleContainerStyle color={color} width={width} height={height} >
      <TextStyle>
        {text}
      </TextStyle>
    </RoundedRectangleContainerStyle >
  );
}

export default RoundedRectangleContainer;