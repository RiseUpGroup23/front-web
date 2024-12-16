import TarjetaCliente from "./TarjetaCliente";
import "./stylesContenedorClientes.css";
import clientesData from "../../../Views/DetallesClientes/clientesData";

export default function ContenedorTarjetas() {
    return (
        <div className="galeriaClientes">
            {clientesData.map((cliente, index) => (
                <TarjetaCliente key={index} cliente={cliente}/>
            ))}
        </div>
    );
}