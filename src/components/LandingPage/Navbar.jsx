import "../LandingPage/Navbar.css"
// import LogoGen from "../../assets/logo-home-gym.jpg"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { Countdown } from "../Timer/Countdown"
import { useState } from "react"

export function Navbar () {
    // const [modalOpen, setModalOpen] = useState(false);
    // const [swalProps, setSwalProps] = useState({});

    // const MySwal = withReactContent(Swal)
    
    // const handleClick = () => {
    //     setModalOpen(true)
    // }

    // if (modalOpen === true) {
    // Swal.fire({
    //    <Countdown />
        
        
    //   })
    // }


    return (
        <div className="nav-container">
            <a className="logo"
                href="/">
                <img 
                className="logo-1"
                src={ LogoGen } 
                alt="logo al home svg" />
            </a>
            <div className="opciones">
                <a className="opciones_item" href="/">Como funciona</a>
                <button 
                    onClick={() => {}}
                    className="timer_modal">
                        Timer test
                </button>
                <a className="opciones_item" href="/">Contacto</a>
                <a className="opciones_item" href="/">Donar</a>
                <a className="opciones_item" href="/">Login</a>
            </div>
        </div>
    )
}