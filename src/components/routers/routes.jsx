import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LandingPage } from "../LandingPage/LandingPage";
import { PptPage } from "../LandingPage/PptPage"
import { ThisThat }  from "../LandingPage/ThisThat.jsx";
import { Preguntas } from "../LandingPage/Preguntas";
import { YoNunca } from "../LandingPage/YoNunca.jsx";
import { CharadesBase } from "../LandingPage/CharadesBase.jsx"


export function MyRoutes() {
    
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/juego-ppt" element={<PptPage />} />
          <Route exact path="/juego-tot" element={<ThisThat />} />
          <Route exact path="/preguntas" element={<Preguntas />} />
          <Route exact path="/nuncanunca" element={<YoNunca />} />
          <Route exact path="/juego-charades" element={<CharadesBase />} />
        </Routes>
      </Router>
    );
  }