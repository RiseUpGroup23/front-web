import ContenedorTarjeta from "../componentes/ComponentesVistaCliente/ContenedorTarjetasClientes"
import Footer from "../componentes/Reutilizables/Footer"

export default function Clientes() {
    return (
        <div>
            <ContenedorTarjeta />
            <div style={{ display: "grid", minHeight: "30vh", gridTemplateRows: "1fr auto" }}>
                <Footer />
            </div>
        </div>
    )
}