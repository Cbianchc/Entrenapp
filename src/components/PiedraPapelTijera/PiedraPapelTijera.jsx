import "../PiedraPapelTijera/PiedraPapelTijera.css"
import React from "react"
import { useEffect, useState, useRef } from 'react'
import PapelImg from "../../assets/pptImg/Papel.png"
import PiedraImg from "../../assets/pptImg/Piedra.png"
import TijerasImg from "../../assets/pptImg/Tijeras.png"
import { BtnVolver } from "../btn-volver/BtnVolver"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

export function PiedraPapelTijera () {
    const [userChoice, setUserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [result, setResult] = useState(null)

    const [userImage, setUserImage] = useState(PiedraImg);
    const [computerImage, setComputerImage] = useState(PiedraImg);
    const [showModal, setShowModal] = useState(false);
    const MySwal = withReactContent(Swal)
    const [otraVuelta, setOtraVuelta] = useState(0);

    const choices = ['Piedra', 'Papel', 'Tijeras']

  const handleClick = (value) => {
    setUserChoice(value)
    setUserImage(getImageByChoice(value));
    setTimeout(generateComputerChoice, 3000);
  }
  const refreshMainComponent = () => {
    setResult(null)
    setUserChoice(null)
    setComputerChoice(null)
    setShowModal(false)
    setUserImage(0)
    setComputerImage(0)
  };

  const lastChoiceRef = useRef(null);
  const generateComputerChoice = () => {
    
    const interval = setInterval(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerImage(getImageByChoice(randomChoice));
      lastChoiceRef.current = randomChoice;
    }, 200);
    
    setTimeout(() => {
      clearInterval(interval);
      setComputerChoice(lastChoiceRef.current);
      setComputerImage(getImageByChoice(lastChoiceRef.current));
    }, 2000);
  };
  // const generateComputerChoice = () => {
  //   let lastChoise;
  //   const interval = setInterval(() => {
  //     const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  //     setComputerImage(getImageByChoice(randomChoice));
  //     lastChoice = randomChoice;
  //   }, 200);
    
  //   setTimeout(() => {
  //     clearInterval(interval);
  //     setComputerChoice(lastChoice);
  //     //setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
  //     setComputerImage(getImageByChoice(lastChoice))
  //   }, 2000);
  // };

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
      setTimeout(() => setShowModal(true), 2000);
    }
  }, [result]);
//---------------------------------------Dispara modal

if (showModal === true) {
  Swal.fire({
    title: `${result}`,
    html: 'Dale play al video para hacer el ejercicio' +
            '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/811825533?h=194e5b37a6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="jumpjacks20sec1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
       
    allowOutsideClick: 'false',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Listo, dame otro!',
    cancelButtonText: "Salir del juego",
  }).then((result) => {
    if (result.isConfirmed) {
      refreshMainComponent()
      //window.location.reload()
      
    }
  })
}
//--------------------------------------Fin de Sweat allert
  return (
    <div 
    className="ppt_container_juego">
        <h3 className="eleji-opcion-titulo">Eleji tu opcion y despues la compu elije uno aleatorio:</h3>
        
        
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
            <h3 className="eleccion">Tu eleccion es: {userChoice}</h3>
            <img 
                className="img-ppt-eleccion"
                src={ userImage }
                alt="Opcion Jugador"/>

            <h4 className="eleccion">PC elige: {computerChoice}</h4>
            <img 
                className="img-ppt-eleccion"
                src={ computerImage }
                alt="Opcion Jugador"/>

            <h3 className="eleccion">Resultado: {result}</h3>
            <p className="eleccion">Despues del resultado aparece la ventana con tu ejercicio</p>
        </section>
        

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