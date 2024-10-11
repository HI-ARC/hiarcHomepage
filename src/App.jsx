import { Routes, Route } from "react-router-dom";
import ActivityPage from "./component/page/ActivityPage";
import IntroduceHiarcPage from "./component/page/IntroduceHiarcPage";
import StudyPage from "./component/page/StudyPage";
import AwardPage from "./component/page/AwardPage";
import Notfound from "./component/page/NotfoundPage";
import HomePage from "./component/page/HomePage";

function App() {
  return (
    <Routes >
      <Route path="/" element={<HomePage />} />
      <Route path="/introduce_hiarc" element={<IntroduceHiarcPage />} />
      <Route path="/activity" element={<ActivityPage />} />
      <Route path="/study" element={<StudyPage />} />
      <Route path="/award" element={<AwardPage />} />
      <Route path="*" element={<Notfound />} />
    </Routes >
  );
}

export default App;
