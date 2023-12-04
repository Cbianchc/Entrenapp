import React, { useEffect, useState } from 'react';
import "./Countdown.css"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { useRef } from 'react';

export const Countdown = ({ minutes }) => {
  const [seconds, setSeconds] = useState(minutes * 60);
  const MySwal = withReactContent(Swal)
  const ref = useRef(null);
  
  const handleClick = () => {
    const element = document.getElementById('comienzo-cards');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let countdownInterval;

    if (seconds > 0) {
      countdownInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [seconds]);

  useEffect(() => {
    if (seconds === 0) {
      Swal.fire({
            title: `Termino el tiempo`,
            html: 'Ahora podes hacer diferentes cosas',
            allowOutsideClick: 'false',
            showCancelButton: true,
            confirmButtonColor: 'blueviolet',
            cancelButtonColor: 'green',
            confirmButtonText: 'Seguir jugando sin timer',
            cancelButtonText: "Voy a elongar",
            width: 800,
            
          })
    }
  }, [seconds]);


  const startTimer = (minutes) => {
    setSeconds(minutes * 60);
    //setTimerActive(true);
  };

  const stopTimer = () => {
    setSeconds(0);
  };


  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='timer_container'>
      
      <div className='timer_botones_container'>
        <span className='titulo_botones'>¿Cuanto va a durar esto?</span>
        <section className='section_botones'>
            <div className='btn-y-texto'>
                <p>Calentar 👇</p>
                <button 
                onClick={() => startTimer(3)}
                className='boton_timepo'>5 minutos</button>
            </div>
            <div className='btn-y-texto'>
                <p>Moverse 👇</p>
                <button 
                onClick={() => startTimer(5)}
                className='boton_timepo'>15 minutos</button>
            </div>
        </section>

        <section className='section_reloj'>
            <p className='timer_titulo'>Tiempo restante:</p>
            <h2 className='timer_reloj' >{formatTime(seconds)}</h2>
            <button 
                className='boton_timepo'
                onClick={stopTimer}>Detener</button>
        </section>
      </div>
      <section className="seguir_sin_timer">
          <button
            onClick={handleClick}
            className='sin_timer'
          >Seguir sin timer</button>
      </section>
    </div>
  );
};

// {!timerActive && (
//     <button 
//     className='boton_timepo'
//     onClick={startTimer}>Comenzar</button>
// )}
// {timerActive && (
//     <button 
//         className='boton_timepo'
//         onClick={stopTimer}>Detener</button>
//     )}