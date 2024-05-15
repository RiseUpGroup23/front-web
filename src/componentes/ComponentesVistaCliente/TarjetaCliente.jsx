import "./tarjet.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from "react-router-dom";

export default function Tarjeta({ name, img, link }) {
    return (
        <Link to={`/clientes/${encodeURIComponent(name)}`}>
            <div className="proyecto">
                <img src={img} />
                <div className="overlay">

                    <h3>{name}</h3>
                    <div className="redes-portafolio">
                        <i className="fa-solid fa-globe"></i>
                    </div>
                </div>
            </div>
        </Link >
    )
}