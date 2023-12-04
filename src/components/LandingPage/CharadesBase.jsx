import "../LandingPage/pagina-ppt.css";
import { Charades } from "../charades/Charades";

export function CharadesBase () {
    return(
        <div className="pagina-ppt">
            <header className="header-ppt">
                <h1 className="titulo-ppt">Adivina la palabra</h1>
            </header>
            <Charades />
            <span className="firma">Hecho por Ciro con palabras</span>
        </div>
    )
}