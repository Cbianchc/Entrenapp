import "../EntrarBotonCard/entrar-boton-card.css"
import { Link, Navigate } from "react-router-dom"

export function EntrarBotonCard(){
    return(
        <div>
            <Link to="/PiedraPapelTIjeraJuego"
            className="entrar-boton-card">
                Entrar al juego
            </Link>

        </div>
    )
}
