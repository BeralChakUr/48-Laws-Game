import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "@/components/HomeScreen";
import GameSession from "@/components/GameSession";
import ProgressScreen from "@/components/ProgressScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/session" element={<GameSession />} />
        <Route path="/progress" element={<ProgressScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
