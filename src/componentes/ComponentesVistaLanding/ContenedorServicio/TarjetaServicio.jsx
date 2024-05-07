// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom"

export default function Tarjeta({ nombre, imagen }) {
  return (
    <Link to="/servicios" className="flex flex-col w-full md:w-4/12 lg:w-3/12 transform transition-transform duration-300 ease-in-out hover:scale-105">
        <span className="flex grow flex-col items-center w-full px-4 py-6 md:px-8 md:py-10 rounded-[37px] border-4 border-solid border-white border-opacity-60 hover:border-white hover:scale-10">
          <img
            src={imagen}
            className="aspect-w-4 aspect-h-3 object-contain object-center w-[80px] md:w-[100px]"
          />
          <div className="justify-center text-white text-center text-xl md:text-3xl font-light self-stretch mt-4 md:mt-8">
            {nombre}
          </div>
        </span>
    </Link>
  )
}