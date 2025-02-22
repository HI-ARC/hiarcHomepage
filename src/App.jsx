import { Routes, Route } from "react-router-dom";
import ActivityPage from "./components/pages/ActivityPage";
import IntroduceHiarcPage from "./components/pages/IntroduceHiarcPage";
import StudyPage from "./components/pages/StudyPage";
import AwardPage from "./components/pages/AwardPage";
import Notfound from "./components/pages/NotfoundPage";
import HomePage from "./components/pages/HomePage";

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
