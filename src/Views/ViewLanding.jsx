import ContenedorClientes from "../componentes/ComponentesVistaLanding/ContenedorClientes/ContenedorClientes"
import ContenedorContacto from "../componentes/ComponentesVistaLanding/ContenedorContacto"
import ContenedorPreguntas from "../componentes/ComponentesVistaLanding/ContenedorPreguntas"
import ContenedorBienvenida from "../componentes/ComponentesVistaLanding/ContenedorBienvenida"
import ContenedorServicios from "../componentes/ComponentesVistaLanding/ContenedorServicio/ContenedorServicios"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Landing() {
    const location = useLocation();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 0);
        }
    }, [location]);

    return (
        <div>
            <ContenedorBienvenida />
            <ContenedorPreguntas />
            <ContenedorClientes />
            <ContenedorServicios />
            <ContenedorContacto />
        </div>
    )
}