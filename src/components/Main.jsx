import "./Main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Test = () => {
  const [isOn, setisOn] = useState(false);
  const toggleHandler = () => {
    setisOn(!isOn);
  };

  const nav = useNavigate();
  return (
    <div className="Test">
      <button
        className="introAcademy"
        onClick={() => nav("/Introhiarc")}
      ></button>
      <button className="Activity" onClick={() => nav("/Activity")}></button>
      <button className="Study" onClick={() => nav("/Study")}></button>
      <button className="Awards" onClick={() => nav("/Awards")}></button>
    </div>
  );
};

export default Test;
