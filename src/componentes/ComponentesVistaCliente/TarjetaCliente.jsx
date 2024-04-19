import "./tarjet.css"
import '@fortawesome/fontawesome-free/css/all.css';

export default function Tarjeta({ nombre, imagen, link }) {
    return (
        <div className="proyecto">
            <img src={imagen}/>
            <div className="overlay">
                <h3>{nombre}</h3>
                <div className="redes-portafolio">
                    <a href={link} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-globe"></i></a>
                </div>
            </div>
        </div>
    )
}