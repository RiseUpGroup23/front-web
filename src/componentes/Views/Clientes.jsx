import ContenedorTarjeta from "../Cliente/ContenedorTarjetas"
import Footer from "../Landing/Footer"

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