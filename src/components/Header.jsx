import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const nav = useNavigate();
  return (
    <div className="Header">
      <div className="HI_ARC" onClick={() => nav("/")}>
        HI-ARC
      </div>
      <div>
        <a href="http://hi-arc.quest/home/">하이팅</a>
      </div>
    </div>
  );
};

export default Header;
