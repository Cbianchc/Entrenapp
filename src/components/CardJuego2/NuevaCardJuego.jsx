import "../CardJuego2/NuevaCardJuego.css"
import React from "react"
import { Link } from 'react-router-dom';
import { PptPage } from "../LandingPage/PptPage";

// import { EntrarBotonCard } from "../EntrarBotonCard/EntrarBotonCard"


export function NuevaCardJuego({ tituloJuego, Nombre, descripcion, juegoId }) {
    const textoJuego = tituloJuego
    
    
    
    
    return(
        <div className="card-container">
            <div className="card_cont">
                <div className="face front">
                    <img 
                        className="img"
                        src={`https://i.ibb.co/${tituloJuego}`}  
                        lt="traer img y tilo de bd en firebase" />
                    <h3 className="titulo">{Nombre}</h3>
                </div>
                <div className="face back">
                    <article className="describe_juego">
                        {descripcion}
                    </article>
                   
                    <Link
                     to={juegoId} 
                     className="entrar-boton-card">
                        Entrar al juego
                    </Link>
                </div>
            </div>
        </div>
    )
}