import { BtnVolver } from "../btn-volver/BtnVolver"
import "./pagina-ppt.css"
import { PreguntasJuego } from "../Preguntas01/PreguntasJuego.jsx";

export function Preguntas() {
    return(
        <div className="pagina-ppt">
            <header className="header-ppt">
                <h1 className="titulo-ppt">Preguntas</h1>
            </header>
            <PreguntasJuego />
            <span className="firma">Hecho por Ciro con Vite.js</span>
        </div>
    )
}