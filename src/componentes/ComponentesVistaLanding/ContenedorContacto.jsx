import { Link } from "react-router-dom";
import Footer from "../Reutilizables/Footer";
import './style.css';

export default function ContenedorContacto() {
  return (
    <>
      <div className="contenedor-contacto">
        <div className="linea-separadora" />
        <h1 className="home-pregunta">
          <strong>¿Necesitas elevar tu presencia?</strong>
        </h1>
        <Link to="/enviar-correo" className='link-boton'>
          <div className='buttonBoz'>
            <button className='buttonz'>Contáctanos</button>
          </div>
        </Link>
        <div className="linea-separadora" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
