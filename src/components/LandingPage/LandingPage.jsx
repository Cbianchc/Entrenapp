import { NuevaCardJuego } from "../CardJuego2/NuevaCardJuego"

export function LandingPage() {
    return(
        <div>
            <div className='titulo-container'>
                <h1 className='titulo-pagina'>Entrenapp</h1>
                <span className='aclaracion-pagina'>Una app para entrenar... EntrenApp.</span>
            
            </div>
            
            <div className='tarjetas-container'>
                <p id="comienzo-cards"
                className='titulo-sector-juegos'>ELEGÍ un juego crack...</p>
            </div>  
            <div  
            className='container-tarjetas-solitas'>
                <NuevaCardJuego 
                    tituloJuego="Mp4vGp9/piedra-papel-tijera.png"
                    Nombre= "Piedra Papel o Tijera"
                    juegoId="juego-ppt"
                    descripcion="El clasico piedra papel o tijera, vas a tener 3 botones con cada eleccion (piedra papel o tijera). 
                    Haces click en el que quieras, despues la PC elije uno aleatorio. 
                    Ganar, perder o empatar dispara un ejercicio diferente para hacer."
                    />
                <NuevaCardJuego 
                    tituloJuego="zFF6Pjj/this-or-that.png"
                    Nombre= "This or That"
                    juegoId="juego-tot"
                    descripcion="En pantalla vas a tener dos opciones, tenes que hacer click en la que elijas, tenes que eljir una si o si. En base a tu eleccion se dispara un ejercicio mas o menos intenso."
                    />
                <NuevaCardJuego 
                    tituloJuego="LhbMw2H/preguntas1.jpg" 
                    Nombre="Preguntas"
                    juegoId="preguntas"
                    descripcion="Preguntas aleatorias de todo tipo con 4 opciones de respuesta, solo una es la correcta con un ejercicios facil de hacer, las demas, ejercicios mas dificiles..."
                    />    
                <NuevaCardJuego 
                    tituloJuego="yQNrxff/charades.jpg"
                    Nombre="Charades"
                    descripcion="Una palabra, sin decir la palabra o sinominos, la persona tiene que adivinar cual es."
                    juegoId="juego-charades"
                    />
                <NuevaCardJuego 
                    tituloJuego="p1Yt4Vb/yonunca.jpg" 
                    Nombre="Yo Nunca!"
                    descripcion="Serie de preguntas, vos respondes si lo hiciste o no, tu respuesta dispara un ejercicio diferente."
                    juegoId="nuncanunca"
                    />
            </div>
             

            <div className='firma'>
                <p>Creado con devocion por Ciro.</p>
            </div>
        </div>
    )
}