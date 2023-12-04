import "./PreguntasJuego.css";
import { useEffect, useState } from "react";
import { db } from "../../data/firebase.jsx";
import { collection, getDocs } from "firebase/firestore";
import { BtnVolver } from "../btn-volver/BtnVolver.jsx";
import Swal from "sweetalert2";

export function PreguntasJuego() {
  const [preguntasTotales, setPreguntasTotales] = useState([]);
  const [preguntasRestantes, setPreguntasRestantes] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(null);
  const [contadorPreguntas, setContadorPreguntas] = useState(0);
  const [respuestasEstado, setRespuestasEstado] = useState([
    { respuesta: "", estado: "normal" },
    { respuesta: "", estado: "normal" },
    { respuesta: "", estado: "normal" },
    { respuesta: "", estado: "normal" },
  ]);
  const [cargandoPreguntas, setCargandoPreguntas] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "quiz01"));
        const temasData = [];
        querySnapshot.forEach((doc) => {
          temasData.push(doc.data());
        });

        // Mezclar preguntas aleatorias
        const preguntasAleatorias = temasData.sort(() => Math.random() - 0.5);
        setPreguntasTotales(preguntasAleatorias);
        setPreguntasRestantes(preguntasAleatorias.slice(0, 10)); // Tomar las primeras 10 preguntas

        // Indica que las preguntas han terminado de cargarse
        setCargandoPreguntas(false);

        // Cargar la primera pregunta
        cargarPregunta();
      } catch (error) {
        console.error("Error al cargar datos desde Firebase:", error);
        //To do: Menssaje de error para el usuario que lo vuelva a cargar.
      }
    };

    fetchData();
  }, []);

  const cargarPregunta = () => {
    if (preguntasRestantes.length > 0) {
      const pregunta = preguntasRestantes.pop();
      const respuestasAleatorias = [
        pregunta.respuesta,
        pregunta.incorrecta1,
        pregunta.incorrecta2,
        pregunta.incorrecta3,
      ];

      const respuestasMezcladas = respuestasAleatorias.sort(() => Math.random() - 0.5);

      setPreguntaActual(pregunta);
      setRespuestasEstado(
        respuestasMezcladas.map((respuesta, index) => ({
          respuesta,
          estado: "normal",
        }))
      );
      setContadorPreguntas(contadorPreguntas + 1);
    } else {
      // Todas las preguntas han sido respondidas
      mostrarResultados();
    }
  };

  const oprimir_btn = (index) => {
    const nuevasRespuestasEstado = [...respuestasEstado];

    if (nuevasRespuestasEstado[index].respuesta === preguntaActual.respuesta) {
      // Respuesta correcta
      nuevasRespuestasEstado[index].estado = "correcto";
      // Incrementar contador de preguntas correctas
      

    } else {
      // Respuesta incorrecta
      nuevasRespuestasEstado[index].estado = "incorrecto";
      // Incrementar contador de preguntas incorrectas
      
    }
    setRespuestasEstado(nuevasRespuestasEstado);

    // Mostrar siguiente pregunta después de 2 segundos
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  };

  const mostrarResultados = () => {
    // Aquí puedes mostrar los resultados finales con el contador de preguntas correctas e incorrectas
    // ...

    // También puedes mostrar el modal de resultados aquí si es necesario
    mostrarModalResultados();
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
    width: '80vw',
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload()
      //Swal.fire("Saved!", "", "success");
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
          //Aca tengo que volver a la pagina de inicio del proyecto en "/"
          window.location = "/"
        }
      });
    }
  })
}

  if (cargandoPreguntas) {
    // Mostrar el loader o spinner mientras las preguntas se cargan
    return <div className="btn-volver">Cargando preguntas...</div>;
  } else {

  return (
    <div className="contenedor_Quiz">
      
      <section className="encabezado_Quiz">
        <div className="categoria_Quiz" id="categoria">
          {preguntaActual && preguntaActual.categoria}
        </div>

        <div className="numero_Quiz" id="numero">
        {`Pregunta ${contadorPreguntas} de 10`}
      </div>

        <div className="pregunta_Quiz" id="pregunta">
          {preguntaActual && preguntaActual.pregunta}
        </div>
        <img
          src={preguntaActual && preguntaActual.imagen}
          className="imagen_Quiz"
          id="imagen"
        />
      </section>
      {respuestasEstado.map((respuesta, index) => (
        <div
          key={index}
          className={`btn_Quiz ${
            respuesta.estado === "correcto" ? "btn-correcto" : ""
          } ${respuesta.estado === "incorrecto" ? "incorrecto" : ""}`}
          onClick={() => oprimir_btn(index)}
        >
          {respuesta.respuesta}
        </div>
      ))}
      <BtnVolver />
    </div>
  );
}
}