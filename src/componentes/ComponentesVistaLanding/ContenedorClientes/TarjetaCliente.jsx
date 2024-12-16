/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./stylesContenedorClientes.css";

const TarjetaCliente = ({ cliente }) => {

    return (
        <Link to={`/clientes/${cliente.location}`} className="cliente">
            <div className="nombreCliente">
                <h3>{cliente.name}</h3>
            </div>
            <img src={cliente.img} alt={cliente.name} />
        </Link>
    );
}

export default TarjetaCliente