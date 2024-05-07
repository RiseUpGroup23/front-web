import "./tarjet.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from "react-router-dom";

export default function Tarjeta({ name, img, link }) {
    return (
        <div className="proyecto">
            <img src={img} />
            <div className="overlay">
                <Link to={`/clientes/${encodeURIComponent(name)}`}>
                    <h3>{name}</h3>
                </Link>
                <div className="redes-portafolio">
                    <a href={link} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-globe"></i></a>
                </div>
            </div>
        </div>
    )
}