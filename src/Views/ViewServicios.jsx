import ContenedorTarjetasServicios from "../componentes/ComponentesVistaServicios/ContenedorTarjetasServicios";
import Footer from "../componentes/Reutilizables/Footer";
import '../componentes/ComponentesVistaServicios/servicios.css';
import { useEffect } from "react";


export default function Servicios() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <h1 className="titulo">Servicios de la Empresa</h1>
            <h2 className="subtitulo">Te mostramos en detalle los servicios que ofrecemos</h2>
            <ContenedorTarjetasServicios />

            <div style={{ display: "grid", marginTop: '2%'}}>
                <Footer />
            </div>
        </div>
    )
}