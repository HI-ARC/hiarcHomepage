import styled from "styled-components";
import Color from "../ui/Color";
import FontStyle from "../ui/FontStyle";

const ButtonStyle = styled.button`
  color: ${Color.primary};
  ${FontStyle.display1Bold}
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 8px;

  &:hover {
    background-color: ${Color.primary};
    color: white;
    transition: 0.5s;
  }
`;

const TextButton = ({ text, onClick }) => {
  return <ButtonStyle onClick={onClick}> {text} </ButtonStyle>;
};

export default TextButton;
