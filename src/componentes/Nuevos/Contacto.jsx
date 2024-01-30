import { Link } from "react-router-dom"

export default function Contacto() {

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="bg-zinc-300 w-full h-0.5" />
      <h1 className="font-medium text-white text-center text-4xl sm:text-5xl lg:text-6xl my-8">¿Necesitas elevar tu <br /> presencia?</h1>
      <Link to="/enviar-correo" className='self-center mb-4'>
          <div id="fifth" className="buttonBox md:w-[500px]">
            <button className="md:text-3xl md:py-3">Contactanos</button>
          </div>
        </Link>
      <div className="flex w-full lg:w-[220px] gap-4 sm:gap-5 px-2 sm:px-5 my-2 justify-center">
        <img src="Iconos/Instagram.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
        <img src="Iconos/LinkedIn.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
        <img src="Iconos/Facebook.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
      </div>
      <a href="#inicio">
        <img src="LogoRiseUp/Logo.png" className="w-[100px] lg:w-[150px]" />
      </a>
      <div className="bg-zinc-300 w-full h-0.5" />
      <div className="mt-6 text-white text-xl sm:text-2xl lg:text-4xl font-light">
        Copyright © 2024 RiseUp inc.
      </div>
    </div>
  )
}