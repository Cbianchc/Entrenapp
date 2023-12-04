import "../Yonunca/Nunca.css"
import { BtnVolver } from "../btn-volver/BtnVolver.jsx"
import { useState, useEffect } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

import { db } from "../../data/firebase.jsx"
import {
    collection,
    getDocs
  } from "firebase/firestore";

export function NuncaNunca (){
    const [mostrarEjer, setMostrarEjer] = useState(false)
    const [eventoClick, setEventoClick] = useState(null)
    const [foto1, setImagen1] = useState("")
    const [foto2, setImagen2] = useState("")
    const [opcion1, setOpcion1] = useState("")
    const [opcion2, setOpcion2] = useState("")

    const [tema, setTema] = useState([])
    
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "yonunca"));
            const temasData = [];
            querySnapshot.forEach((doc) => {
              temasData.push(doc.data());
            });
    
            // Obtén un elemento aleatorio de la lista
            const randomIndex = Math.floor(Math.random() * temasData.length);
            const randomTema = temasData[randomIndex];

            setOpcion1(randomTema.pregunta);
            // setImagen1(randomTema.imagen1);
            
          } catch (error) {
            console.error("Error al cargar datos desde Firebase:", error);
          }
        };
    
        fetchData();
      }, []);
    
    function handleClick (event) {
        setEventoClick(event)
        setMostrarEjer(true)
    }

//---------------------------------------Dispara modal
if (mostrarEjer === true) {
    Swal.fire({
      title: `${eventoClick}`,
      html: 'Dale play al video para hacer el ejercicio' +
              '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/811825533?h=194e5b37a6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="jumpjacks20sec1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',  
      allowOutsideClick: 'false',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Listo, dame otro!',
      cancelButtonText: "Salir del juego",

      allowOutsideClick: false
      
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload() 
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        window.location.href = '/'
      }
    })
  }
  //--------------------------------------Fin de Sweat allert
    return(
        <div className="container-nunca">
             <section className="titulo-nunca">
                {/* <h1 className="titulo-nunca_preferis">YO NUNCA NUNCA...</h1> */}
                <h3 className="titulo-nunca_opcion">{opcion1}</h3>
                <img src="" alt="" />
            </section>
            <section className="container-nunca_pregunta">
                <div className="opcion1_boton_nunca" onClick={() => handleClick(opcion2)}>
                    <h2 id="titulo1" className="nombre-foto-1">Lo hice! ✔</h2>
                </div>

                <div className="opcion1_boton_nunca" onClick={() => handleClick(opcion2)}>
                    <h2 id="titulo1" className="nombre-foto-1">No lo hice! ❌</h2>
                </div>
            </section>
            <section className="boton_inicio">
                <BtnVolver />
            </section>
        </div>
    )
}