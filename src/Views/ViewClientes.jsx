import ContenedorTarjeta from "../componentes/ComponentesVistaCliente/ContenedorTarjetasClientes"
import Footer from "../componentes/Reutilizables/Footer"

export default function Clientes() {
    return (
        <div>
            <ContenedorTarjeta />
            <div style={{ display: "grid", marginTop: "2%" }}>
                <Footer />
            </div>
        </div>
    )
}