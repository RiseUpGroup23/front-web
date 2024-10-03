import { Link } from "react-router-dom";
import '../style.css';

export default function Tarjeta({ nombre, imagen }) {
  return (
    <Link to="/servicios" className="tarjeta">
      <span className="contenido-tarjeta">
        <img src={imagen} className="tarjeta-imagen" alt={nombre} />
        <div className="nombre-tarjeta">
          {nombre}
        </div>
      </span>
    </Link>
  );
}
