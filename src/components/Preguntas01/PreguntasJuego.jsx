import "./PreguntasJuego.css";
import { db } from "../../data/firebase.jsx"
import {
    collection,
    getDocs,
  } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BtnVolver } from "../btn-volver/BtnVolver.jsx";
import Swal from "sweetalert2";


export function PreguntasJuego(){
  const [categoria, setCategoria] = useState("Categoria");
  const [imagen, setImagen] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestas, setRespuestas] = useState([]);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState("");
  const [respuestasMezcladas, setRespuestasMezcladas] = useState([]);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [botonesDeshabilitados, setBotonesDeshabilitados] = useState(false); 
  
  //const MySwal = withReactContent(Swal)
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState("");

  const [respuestasEstado, setRespuestasEstado] = useState([
    { respuesta: respuestasMezcladas[0], estado: "normal" },
    { respuesta: respuestasMezcladas[1], estado: "normal" },
    { respuesta: respuestasMezcladas[2], estado: "normal" },
    { respuesta: respuestasMezcladas[3], estado: "normal" },
  ]);
  

  //Traer los datos desde Firebase.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "quiz01")); //Nombre de la coleccion que voy a usar
        const temasData = [];
        querySnapshot.forEach((doc) => {
          temasData.push(doc.data());
        });
        //Hasta aca.

        //Sacar elemento aleatorio de la lista
        const randomIndex = Math.floor(Math.random() * temasData.length);
        const randomTema = temasData[randomIndex];

        // Todas las respuestas, incluyendo la correcta y las guardo en Array
        const respuestasAleatorias = [
          randomTema.respuesta,
          randomTema.incorrecta1,
          randomTema.incorrecta2,
          randomTema.incorrecta3,
        ];

        // Mezclar el array de respuestas, aleatorio
        const respuestasMezcladas = respuestasAleatorias.sort(() => Math.random() - 0.5);


        setCategoria(randomTema.categoria);
        setImagen(randomTema.imagen);
        setPregunta(randomTema.pregunta);
        setRespuestas(respuestasAleatorias);
        setRespuestaCorrecta(randomTema.respuesta);
        setRespuestasMezcladas(respuestasMezcladas);
        
      } catch (error) {
        console.error("Error al cargar datos desde Firebase:", error);
      }
    };

    fetchData();
  }, []);

const oprimir_btn = (index) => {

  if (botonesDeshabilitados) {
    // Si los botones ya están deshabilitados, no hagas nada
    return;
  }
  setBotonesDeshabilitados(true);

  const nuevasRespuestasEstado = [...respuestasEstado];

  if (respuestasMezcladas[index] === respuestaCorrecta) {
    // Respuesta correcta
    nuevasRespuestasEstado[index].estado = "correcto";
    setResult("Correcto 🎉");
    //Disparar confeti 
  } else {
    // Respuesta incorrecta
    nuevasRespuestasEstado[index].estado = "incorrecto";

    const respuestaCorrectaIndex = respuestasMezcladas.findIndex(
      (respuesta) => respuesta === respuestaCorrecta
    );
    if (respuestaCorrectaIndex !== -1) {
      nuevasRespuestasEstado[respuestaCorrectaIndex].estado = "correcto";
    }
    setResult("Incorrecto 🤣");
  }
  setRespuestasEstado(nuevasRespuestasEstado);

  setTimeout(() => {
    setShowModal(true);
  }, 1000);
};


//Modal de ejercicios
if (showModal === true) {
  Swal.fire({
    title: `${result}`,
    html: 'Dale play al video para hacer el ejercicio' +
            '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/811825533?h=194e5b37a6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="jumpjacks20sec1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
       
    allowOutsideClick: 'false',
    showCancelButton: false,
    showDenyButton: true,
    confirmButtonColor: '#3085d6',
    denyButtonColor: '#d33',
    confirmButtonText: 'Listo, dame otro!',
    denyButtonText: "Salir del juego",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload()
    } else if (result.isDenied) {
      Swal.fire({
        title: "Cerramos todo todo?",
        text: "Si cerramos nos vamos en serio!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Volver al inicio"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location = "/"
        } else {
          window.location.reload()
        }
      });
    }
  })
}

  return(
    <div className="contenedor_Quiz">
      <div className="puntaje_Quiz" id="puntaje"></div>
      <section className="encabezado_Quiz">
        <div className="categoria_Quiz" id="categoria">{ categoria }</div>

        <div className="numero_Quiz" id="numero"></div>
        
        <div className="pregunta_Quiz" id="pregunta">{ pregunta }</div>
        <img src={ imagen } className="imagen_Quiz" id="imagen"/>
      </section>
      <div
        className={`btn_Quiz ${respuestasEstado[0].estado === "correcto" ? "btn-correcto" : ""
        } ${respuestasEstado[0].estado === "incorrecto" ? "incorrecto" : ""}`}
        id="btn1"
        onClick={() => oprimir_btn(0)}
        disabled={botonesDeshabilitados}
      >
        {respuestasMezcladas[0]}
      </div>
      <div
        className={`btn_Quiz ${
          respuestasEstado[1].estado === "correcto" ? "btn-correcto" : ""
        } ${respuestasEstado[1].estado === "incorrecto" ? "incorrecto" : ""}`}
        id="btn2"
        onClick={() => oprimir_btn(1)}
        disabled={botonesDeshabilitados}
      >
        {respuestasMezcladas[1]}
      </div>
      <div
        className={`btn_Quiz ${
          respuestasEstado[2].estado === "correcto" ? "btn-correcto" : ""
        } ${respuestasEstado[2].estado === "incorrecto" ? "incorrecto" : ""}`}
        id="btn3"
        onClick={() => oprimir_btn(2)}
        disabled={botonesDeshabilitados}
      >
        {respuestasMezcladas[2]}
      </div>
      <div
        className={`btn_Quiz ${
          respuestasEstado[3].estado === "correcto" ? "btn-correcto" : ""
        } ${respuestasEstado[3].estado === "incorrecto" ? "incorrecto" : ""}`}
        id="btn4"
        onClick={() => oprimir_btn(3)}
        disabled={botonesDeshabilitados}
      >
        {respuestasMezcladas[3]}
      </div>
      <BtnVolver />  
    </div>
  )
}