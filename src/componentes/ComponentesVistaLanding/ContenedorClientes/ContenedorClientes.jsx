import ContenedorTarjetas from "./ContenedorTarjetas";
import "../style.css"

export default function ContenedorClientes() {
    return (
        <div className="contenedor-servicios">
            <div className="porTitulo">
                <div className="home-pregunta">
                    <strong>Portfolio de la agencia</strong>
                </div>
                <p>Te mostramos nuestros proyectos realizados con éxito</p>
            </div>
            <ContenedorTarjetas />
        </div>
    )
}