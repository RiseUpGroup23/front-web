import { Link } from 'react-router-dom';
import './style.css';

export default function ContenedorBienvenida() {
  return (
    <div id='inicio' className='contenedor-bienvenida'>
      <div className='HomeBgImage'></div>
      <div className='texto-bienvenida'>
        Elevamos tu presencia, multiplicamos <br /> tus ventas
        <Link to="/enviar-correo" className='link-boton'>
          <div className='buttonBoz'>
            <button className='buttonz'>¡Subir de Nivel!</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
