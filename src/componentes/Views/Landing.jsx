import Contacto from "../Nuevos/Contacto"
import Preguntas from "../Nuevos/Preguntas"
import Principal from "../Nuevos/Principal"
import Servicios from "../Nuevos/Servicios"

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