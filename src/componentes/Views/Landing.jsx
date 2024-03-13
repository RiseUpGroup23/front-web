import Contacto from "../Landing/Contacto"
import Preguntas from "../Landing/Preguntas"
import Principal from "../Landing/Principal"
import Servicios from "../Landing/Servicios"

export default function Landing() {
    return (
        <div>
            <Principal />
            <Preguntas />
            <Servicios />
            <Contacto />
        </div>
    )
}