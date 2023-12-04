import "../charades/Charades.css";
import { BtnVolver } from "../btn-volver/BtnVolver.jsx";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { db } from "../../data/firebase.jsx";
import { collection, getDocs } from "firebase/firestore";

export function Charades() {
  const [mostrarEjer, setMostrarEjer] = useState(false);
  const [eventoClick, setEventoClick] = useState(null);
  const [opcion1, setOpcion1] = useState("...");
  const [timerActive, setTimerActive] = useState(true);
  const [counter, setCounter] = useState(30);

  const MySwal = withReactContent(Swal);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "charades"));
      const temasData = [];
      querySnapshot.forEach((doc) => {
        temasData.push(doc.data());
      });

      // Obtén un elemento aleatorio de la lista
      const randomIndex = Math.floor(Math.random() * temasData.length);
      const randomTema = temasData[randomIndex];

      setOpcion1(randomTema.palabra);
    } catch (error) {
      console.error("Error al cargar datos desde Firebase:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const mostrarModal = () => {
    MySwal.fire({
      title: '❌❌ TIEMPO AGOTADO ❌❌',
      html: 'Se termino el tiempo, a joderse! Ahora hay que hacer el ejercicio',
      allowOutsideClick: 'false',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Nueva palabra!',
      cancelButtonText: "Salir del juego",
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        handleModalTiempo();
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        window.location.href = '/';
      }
    });
  };

  useEffect(() => {
    const timer =
      timerActive && counter > 0 && setInterval(() => {
        setCounter((prev) => prev - 1);

        if (counter === 1) {
          clearInterval(timer);
          setTimerActive(false);
          mostrarModal();
        }
      }, 1000);

    return () => clearInterval(timer);
  }, [timerActive, counter]);

  const handleModalTiempo = () => {
    fetchData();
    setCounter(30);
    setTimerActive(true);

  };

  const handleOtraPalabra = () => {
    fetchData(); // Trae una nueva palabra al hacer clic en "OTRA"
    setCounter(30);
    //setTimerActive(true); // Reinicia el temporizador
  };

  return (
    <div className="container-charades">
      <h1 className="titulo-charades_preferis">Tu palabra es:</h1>
      <section className="titulo-charades">
        <h3 className="titulo-charades_palabra">{opcion1}</h3>
        <img src="" alt="" />
      </section>
      <section className="container-charades_pregunta">
        <div className="tiempo-restante_charades">
          <div>Tiempo restante: {counter}</div>
        </div>
        <div className="opcion1_boton_charades" onClick={handleOtraPalabra}>
          <h2 id="titulo1" className="nombre-foto-1">
            OTRA
          </h2>
        </div>
      </section>
      <section className="boton_inicio">
        <BtnVolver />
      </section>
    </div>
  );
}
