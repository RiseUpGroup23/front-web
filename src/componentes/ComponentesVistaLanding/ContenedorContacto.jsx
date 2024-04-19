import { Link } from "react-router-dom"
import Footer from "../Reutilizables/Footer"

export default function ContenedorContacto() {

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <div className="bg-zinc-300 w-full h-0.5" />
        <h1 className="font-medium text-white text-center text-4xl sm:text-5xl lg:text-6xl my-10">¿Necesitas elevar tu <br /> presencia?</h1>
        <Link to="/enviar-correo" className='self-center mb-10'>
          <div id="fifth" className="buttonBox md:w-[500px]">
            <button className="md:text-3xl md:py-3">Contactanos</button>
          </div>
        </Link>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}