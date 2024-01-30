import { Link } from 'react-router-dom'
import './style.css'

export default function Principal() {
  return (
    <div id="inicio" className="items-center flex-col relative flex">
      <img
        src="Fondos/Imagen1.jpg"
        className="absolute h-full w-full object-cover"
      />
      <div className="relative flex w-full max-w-screen-lg flex-col mt-10 mb-20 mx-auto">
        <img
          src="LogoRiseUp/Logo.png"
          className="aspect-[4] object-contain self-center"
        />
        <div className="justify-center text-white text-center text-3xl md:text-5xl lg:text-5xl font-medium">
          Elevamos tu presencia, multiplicamos tus ventas
        </div>
        <Link to="/enviar-correo" className='mt-8 md:mt-16 self-center'>
          <div id="fifth" className="buttonBox md:w-[500px]">
            <button className='md:text-3xl md:py-3'>¡Subir de Nivel!</button>
          </div>
        </Link>
      </div>
    </div>
  )
}