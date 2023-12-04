import { BtnVolver } from "../btn-volver/BtnVolver"
import { ThisorThat } from "../this-or-that/ThisorThat"
import "../LandingPage/pagina-ppt.css"

export function ThisThat () {
    return(
        <div className="pagina-ppt">
            <header className="header-ppt">
                <h1 className="titulo-ppt">This or That</h1>
            </header>
            <ThisorThat />
            <span className="firma">Hecho con react por Ciro</span>
        </div>
    )
}