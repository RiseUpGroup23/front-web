import Clientes from "../Landing/Clientes"
import Contacto from "../Landing/Contacto"
import Preguntas from "../Landing/Preguntas"
import Principal from "../Landing/Principal"
import Servicios from "../Landing/Servicios"

export default function Landing() {
    return (
        <div>
            <Principal />
            <Preguntas />
            {/* <Clientes/> */}
            <Servicios />
            <Contacto />
        </div>
    )
}