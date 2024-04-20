import TarjetaCliente from "./TarjetaCliente";
import "./stylesContenedorClientes.css";

export default function ContenedorTarjetas() {
    const Clientes = [
        { nombreCliente: 'NeoSalud Centro Neuropsicológico', imagenCliente: "../../../../public/Clientes/Neo.png" },
        { nombreCliente: 'NeoSalud Centro Neuropsicológico', imagenCliente: "../../../../public/Clientes/Neo.png" },
        { nombreCliente: 'NeoSalud Centro Neuropsicológico', imagenCliente: "../../../../public/Clientes/Neo.png" },
        { nombreCliente: 'NeoSalud Centro Neuropsicológico', imagenCliente: "../../../../public/Clientes/Neo.png" },
    ]
    return (
        <div className="galeriaClientes">
            {Clientes.map((cliente, index) => (
                <TarjetaCliente key={index} nombreCliente={cliente.nombreCliente} imagenCliente={cliente.imagenCliente}/>
            ))}
        </div>
    );
}