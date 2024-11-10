import BotLink from "./Componets/BotLink/BotLink";
import Crew from "./Componets/Crew/Crew";
import ForWho from "./Componets/ForWho/ForWho";
import NavBar from "./Componets/NavBar/NavBar"
import Technology from "./Componets/Tehnology/Technology";
import './index.css'
import { BrowserRouter } from "react-router-dom";




function App() {
  
  return (
    <>
        <BrowserRouter>
            <NavBar />
            <BotLink/>
            <Crew/>
            <Technology/>
            <ForWho/>
        </BrowserRouter>
    </>
  )
}

export default App
