import React from "react";
import { Link } from "react-router-dom";
import "./stylesContenedorClientes.css";

export default function TarjetaCliente({ nombreCliente, imagenCliente }) {
    const clienteURL = encodeURIComponent(nombreCliente); // Codificar el nombre del cliente para usarlo en la URL

    return (
        <Link to={`/nuestros-clientes/${clienteURL}`} className="cliente">
            <div className="nombreCliente">
                <h3>{nombreCliente}</h3>
            </div>
            <img src={imagenCliente} alt={nombreCliente} />
        </Link>
    );
}