import React from "react";
import { Link } from "react-router-dom";
import "./stylesContenedorClientes.css";

export default function TarjetaCliente({ name, img }) {

    return (
        <Link to={`/clientes/${encodeURIComponent(name)}`}  className="cliente">
            <div className="nombreCliente">
                <h3>{name}</h3>
            </div>
            <img src={img} alt={name} />
        </Link>
    );
}