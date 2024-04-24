import Tarjeta from "./TarjetaCliente";
import "../../../public/Fondos/Imagen4.jpg"
import clientesData from "../../Views/DetallesClientes/clientesData";

export default function ContenedorTarjeta() {
    return (
        <div className="galeria">
            {clientesData.map((cliente, index) => (
                <Tarjeta key={index} name={cliente.name} img={cliente.img} link={cliente.link} />
            ))}
        </div>
    )
}