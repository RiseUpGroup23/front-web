import { Link } from 'react-router-dom'
import './styles.css'

export default function Principal() {
  return (
    <div id='inicio' className='relative flex items-center flex-col'>
      <img
        src="Fondos/Imagen1.jpg"
        className="md:object-cover object-contain md:w-[100%] md:h-[600px]"
        // style={{ width: '100%', height: '600px' }} // Establecer el ancho deseado
        alt="Descripción de la imagen"
      />
      <div className='absolute text-white text-center flex flex-col text-2xl md:text-5xl mt-8 md:mt-[150px]'>
        Elevamos tu presencia, multiplicamos <br /> tus ventas
        <Link to="/enviar-correo" className='mt-10 self-center'>
          <div id="fifth" className="buttonBox md:w-[500px] md:mt-[100px]">
            <button className='md:text-3xl md:py-3'>¡Subir de Nivel!</button>
          </div>
        </Link>
      </div>
    </div>
  );
}