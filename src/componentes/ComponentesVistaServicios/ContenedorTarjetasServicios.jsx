import TarjetaServicios from "./TarjetaServicios";
import './servicios.css';
import serviciosData from "./serviciosData";

export default function ContenedorTarjetasServicios() {
    return (
        <div>
            {serviciosData.map((servicio, index) => (
                <TarjetaServicios key={index} servicio={servicio.servicio} img={servicio.img} inicioP={servicio.inicioP} parrafo={servicio.parrafo} />
            ))}
        </div>
    )
}