import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Introhiarc from "./pages/Introhiarc";
import Study from "./pages/Study";
import Notfound from "./pages/Notfound";
import NewHome from "./pages/NewHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Introhiarc" element={<Introhiarc />} />
      <Route path="/Activity" element={<Activity />} />
      <Route path="/Study" element={<Study />} />
      <Route path="NewHome" element={<NewHome />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
