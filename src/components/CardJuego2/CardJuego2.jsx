import "../CardJuego2/CardJuego2.css"
import React from "react"
import { Link } from 'react-router-dom';
import { PptPage } from "../LandingPage/PptPage";

// import { EntrarBotonCard } from "../EntrarBotonCard/EntrarBotonCard"


export function CardJuego2({ tituloJuego, Nombre, juegoId }) {
    const textoJuego = tituloJuego
    
    
    
    
    return(
        <div className="card-container">
            <a href="#" className="card">
                <img src={`https://i.ibb.co/${tituloJuego}`} 
                    alt="imagenJuego" 
                    className="card__img"/>
                <span className="card__footer">
                    <span>{Nombre}</span>
                    <span>2 minutes!</span>
                </span>
                <Link className="card__action"
                        to={juegoId} >
                    <svg viewBox="0 0 448 512" title="play">
                        <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                    </svg>
                </Link>
            </a>
            
        </div>
    )
}