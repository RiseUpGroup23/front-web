import ContenedorClientes from "../componentes/ComponentesVistaLanding/ContenedorClientes"
import ContenedorContacto from "../componentes/ComponentesVistaLanding/ContenedorContacto"
import ContenedorPreguntas from "../componentes/ComponentesVistaLanding/ContenedorPreguntas"
import ContenedorBienvenida from "../componentes/ComponentesVistaLanding/ContenedorBienvenida"
import ContenedorServicios from "../componentes/ComponentesVistaLanding/ContenedorServicio/ContenedorServicios"

export default function Landing() {
    return (
        <div>
            <ContenedorBienvenida />
            <ContenedorPreguntas />
            <ContenedorClientes/>
            <ContenedorServicios />
            <ContenedorContacto />
        </div>
    )
}