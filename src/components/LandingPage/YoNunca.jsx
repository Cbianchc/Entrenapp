import "../LandingPage/pagina-ppt.css";
import { NuncaNunca } from "../Yonunca/Nuncanunca";

export function YoNunca () {
    return(
        <div className="pagina-ppt">
            <header className="header-ppt">
                <h1 className="titulo-ppt">YO NUNCA</h1>
            </header>
            <NuncaNunca />
            <span className="firma">Hecho con react por Ciro</span>
        </div>
    )
}