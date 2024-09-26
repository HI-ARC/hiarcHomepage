import "./Test.css";
import { useNavigate } from "react-router-dom";
const Test = () => {
  const nav = useNavigate();
  return (
    <div className="Test">
      <button
        className="introAcademy"
        onClick={() => nav("/Introhiarc")}
      ></button>
      <button className="Activity" onClick={() => nav("/Activity")}></button>
      <button className="Study" onClick={() => nav("/Study")}></button>
    </div>
  );
};

export default Test;
