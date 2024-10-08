import TarjetaServicios from "./TarjetaServicios";
import '../ComponentesVistaLanding/ContenedorClientes/stylesContenedorClientes.css';
import serviciosData from "./serviciosData";

export default function ContenedorTarjetasServicios() {
    return (
        <div className="galeriaClientes">
            {serviciosData.map((servicio, index) => (
                <TarjetaServicios key={index} servicio={servicio.servicio} img={servicio.img} inicioP={servicio.inicioP} parrafo={servicio.parrafo} />
            ))}
        </div>
    )
}