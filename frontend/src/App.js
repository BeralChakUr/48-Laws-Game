import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "@/components/HomeScreen";
import GameSession from "@/components/GameSession";
import ProgressScreen from "@/components/ProgressScreen";
import StorySelect from "@/components/StorySelect";
import StoryMode from "@/components/StoryMode";
import AchievementsScreen from "@/components/AchievementsScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/session" element={<GameSession />} />
        <Route path="/progress" element={<ProgressScreen />} />
        <Route path="/story" element={<StorySelect />} />
        <Route path="/story/:scenarioId" element={<StoryMode />} />
        <Route path="/achievements" element={<AchievementsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
