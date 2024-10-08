import ContenedorTarjetasServicios from "../componentes/ComponentesVistaServicios/ContenedorTarjetasServicios";
import Footer from "../componentes/Reutilizables/Footer";
import '../componentes/ComponentesVistaServicios/servicios.css';
import { useEffect } from "react";


export default function Servicios() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="contenedor-servicios">
                <div className="porTitulo">
                    <div className="home-pregunta">
                        <strong>Servicios de la Empresa</strong>
                    </div>
                    <p>Te mostramos en detalle los servicios que ofrecemos</p>
                </div>
                <ContenedorTarjetasServicios />
            </div>
            <Footer />
        </>
    )
}