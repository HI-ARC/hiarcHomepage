import styled from "styled-components";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";

const ButtonStyle = styled.button`
  color: ${Color.primary};
  ${FontStyle.display1Bold}
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const TextButton = ({ text, onClick }) => {
  return <ButtonStyle onClick={onClick} > {text} </ButtonStyle >;
}

export default TextButton;