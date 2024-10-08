import Footer from "../componentes/Reutilizables/Footer"
import ContenedorClientes from "../componentes/ComponentesVistaLanding/ContenedorClientes/ContenedorClientes"

export default function Clientes() {
    return (
        <div>
            <ContenedorClientes />
            <div style={{ display: "grid", marginTop: "2%" }}>
                <Footer />
            </div>
        </div>
    )
}