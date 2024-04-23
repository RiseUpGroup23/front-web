import TarjetaCliente from "./TarjetaCliente";
import { Link } from "react-router-dom";
import "./stylesContenedorClientes.css";

export default function ContenedorTarjetas() {
    const clientes = [
        { nombreCliente: 'NeoSalud Centro Neuropsicológico', imagenCliente: "/Clientes/Neo.png" },
        { nombreCliente: 'Rama Store', imagenCliente: "/Clientes/Ramas.png" },
    ];

    return (
        <div className="galeriaClientes">
            {clientes.map((cliente, index) => (
                <TarjetaCliente key={index} nombreCliente={cliente.nombreCliente} imagenCliente={cliente.imagenCliente}/>
            ))}
        </div>
    );
}