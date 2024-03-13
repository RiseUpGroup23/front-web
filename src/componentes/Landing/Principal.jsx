import { Link } from 'react-router-dom'
import './style.css'

export default function Principal() {
  return (
    <div id='inicio' className='relative flex items-center flex-col'>
      <div className='HomeBgImage'></div>
      <div className='absolute text-white text-center flex flex-col text-2xl md:text-5xl mt-8 md:mt-[150px]'>
        Elevamos tu presencia, multiplicamos <br /> tus ventas
        <Link to="/enviar-correo" className='mt-10 self-center'>
          <div id="fifthz" className="buttonBoz md:w-[500px] md:mt-[100px]">
            <button className='buttonz md:text-3xl md:py-3'>¡Subir de Nivel!</button>
          </div>
        </Link>
      </div>
    </div>
  );
}