import { Routes, Route } from "react-router-dom";
import ActivityPage from "./components/page/ActivityPage";
import IntroduceHiarcPage from "./components/page/IntroduceHiarcPage";
import StudyPage from "./components/page/StudyPage";
import AwardPage from "./components/page/AwardPage";
import Notfound from "./components/page/NotfoundPage";
import HomePage from "./components/page/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/introduce_hiarc" element={<IntroduceHiarcPage />} />
      <Route path="/activity" element={<ActivityPage />} />
      <Route path="/study" element={<StudyPage />} />
      <Route path="/award" element={<AwardPage />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
