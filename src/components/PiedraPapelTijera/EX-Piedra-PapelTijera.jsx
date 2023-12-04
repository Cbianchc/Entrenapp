import "../PiedraPapelTijera/PiedraPapelTijera.css"
import React from "react"
import { useEffect, useState } from 'react'
import PapelImg from "../../assets/pptImg/Papel.png"
import PiedraImg from "../../assets/pptImg/Piedra.png"
import TijerasImg from "../../assets/pptImg/Tijeras.png"
import { BtnVolver } from "../btn-volver/BtnVolver"


export function PiedraPapelTijera () {
    const [userChoice, setUserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [result, setResult] = useState(null)

    const [userImage, setUserImage] = useState(PiedraImg);
    const [computerImage, setComputerImage] = useState(PiedraImg);
    const [showModal, setShowModal] = useState(false);


    const choices = ['Piedra', 'Papel', 'Tijeras']

  const handleClick = (value) => {
    setUserChoice(value)
    setUserImage(getImageByChoice(value));
    setTimeout(generateComputerChoice, 3000);
  }
  
  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)   
    setComputerImage(getImageByChoice(randomChoice))
  }
  
  const getImageByChoice = (choice) => {
    switch (choice) {
      case 'Piedra':
        return PiedraImg;
      case 'Papel':
        return PapelImg;
      case 'Tijeras':
        return TijerasImg;
      default:
        return null;
    }
  }


  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case 'TijerasPapel':
        case 'PiedraTijeras':
        case 'PapelPiedra':
          setResult('Ganaste 🎉!')
          break
        case 'PapelTijeras':
        case 'TijerasPiedra':
        case 'PiedraPapel':
          setResult('PERDISTE 😐!')
          break
        case 'PiedraPiedra':
        case 'PapelPapel':
        case 'TIjerasTijeras':
          setResult('EMPATE 😎!')
          break;
        default:
          setResult(null);
      }
    }
  }, [computerChoice, userChoice])
  
  useEffect(() => {
    if (result !== null) {
      setTimeout(() => setShowModal(true), 3000);
    }
  }, [result]);



  return (
    <div className="ppt-container-juego">
        <h2 className="eleji-opcion-titulo">Eleji tu opcion y despues la compu elije uno aleatorio:</h2>
        <section className="section-botones">

            <button className="boton-ppt"
                onClick={() => handleClick("Papel")}>
                <img 
                    className="img-ppt-todos"
                    src={ PapelImg } 
                    alt="Papel"/>
            </button>
            <button className="boton-ppt"
                onClick={() => handleClick("Piedra")}>
                <img 
                    className="img-ppt-todos"
                    src={ PiedraImg } 
                    alt="Piedra"/>
            </button>
            <button className="boton-ppt"
                onClick={() => handleClick("Tijeras")}>
                <img 
                    className="img-ppt-todos"
                    src={ TijerasImg } 
                    alt="Tijeras"/>
            </button>
        </section>
        <section className="section-juego">
            <h2 className="eleccion">Tu eleccion es: {userChoice}</h2>
            <img 
                className="img-ppt-eleccion"
                src={ userImage }
                alt="Opcion Jugador"/>

            <h2 className="eleccion">PC elige: {computerChoice}</h2>
            <img 
                className="img-ppt-eleccion"
                src={ computerImage }
                alt="Opcion Jugador"/>

            <h2 className="eleccion">Resultado: {result}</h2>
            <p className="eleccion">Despues del resultado aparece la ventana con tu ejercicio</p>
        </section>
        {showModal && (
        <div className="modal">
          <h3>Muy bien {result}!</h3>
          <h4>Ahora te toca hacer este ejercicio</h4>
          {/* Aquí puedes agregar el reproductor de video dependiendo del resultado */}
        </div>
      )}
        <BtnVolver />
    </div>
  )
}




// export function PiedraPapelTijera () {
//     return(
//         <div className="container-ppt">

//             <h2 className="titulo-juego-ppt">Eleji una opcion haciendo click</h2>
//             <section className="tres-eleciones">
//                 <button 
//                     onClick={()=> {console.log("piedra")}}
//                     className="piedra">
//                         PIEDRA
//                 </button>
//                 <button 
//                     onClick={()=> {console.log("papel")}}
//                     className="papel">
//                         PAPEL
//                 </button>
//                 <button 
//                     onClick={()=> {console.log("tijera")}}
//                     className="tijera">
//                         TIJERA
//                 </button>
//             </section>
//             <section className="juego">
//                 <p>Eleccion del Jugador es:</p>
//                 <p>Eleccion de la maquina es:</p>
//                 <span>Reasultado:</span>
//             </section>
        
//         </div>
//     )
// }