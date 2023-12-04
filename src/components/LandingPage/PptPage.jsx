import { PiedraPapelTijera } from "../PiedraPapelTijera/PiedraPapelTijera"
import { BtnVolver } from "../btn-volver/BtnVolver"
import "./pagina-ppt.css"
export function PptPage() {
    return(
        <div className="pagina-ppt">
            <header className="header-ppt">
                <h1 className="titulo-ppt">Piedra Papel o Tijera</h1>
            </header>
            <PiedraPapelTijera />
            <span className="firma">Hecho por Ciro con cariño</span>
        </div>
    )
}