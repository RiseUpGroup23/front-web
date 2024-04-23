import React from "react";
import clientesData from "../componentes/ComponentesVistaLanding/ContenedorClientes/clientesData";

export default function DetalleCliente () {
    return (
        <div>
            <h1 className="text-white">Alojaaaaa</h1>
        </div>
    )
};


    // // Obtener el nombre del cliente de la URL
    // const { nombreCliente } = match.params;
    // console.log("Hola", nomb);

    // // Buscar el objeto cliente correspondiente en el array importado
    // const cliente = clientesData.find(cliente => cliente.nombre === nombreCliente);

    // if (!cliente) {
    //     return <div>Cliente no encontrado</div>;
    // }

    // return (
    //     <div>
    //         <h1>{cliente.nombre}</h1>
    //         <img src={cliente.imagen} alt={cliente.nombre} />
    //         <p>{cliente.descripcion}</p>
    //         <h2>Servicios Realizados:</h2>
    //         <ul>
    //             {cliente.servicios.map((servicio, index) => (
    //                 <li key={index}>{servicio}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );