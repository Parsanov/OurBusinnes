import BotLink from "./Componets/BotLink/BotLink";
import Competitors from "./Componets/Competitors/Competitors";
import Crew from "./Componets/Crew/Crew";
import ForWho from "./Componets/ForWho/ForWho";
import NavBar from "./Componets/NavBar/NavBar"
import Technology from "./Componets/Tehnology/Technology";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <BotLink/>
            <Crew/>
            <Technology/>
            <ForWho/>
            <Competitors/>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;