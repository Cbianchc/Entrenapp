import "../btn-volver/BtnVolver.css"
import { Link } from "react-router-dom"
export function BtnVolver (){
    return(
        <div>
                <Link
                    className="btn-volver"
                    to={"/"} 
                    >
                        home
                </Link>
        </div>
    )
}