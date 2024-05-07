import React, { useState } from 'react';
import './servicios.css';

export default function TarjetaServicios({ servicio, img, inicioP, parrafo }) {
    const [mostrarMas, setMostrarMas] = useState(false);

    const handleMostrarMas = () => {
        setMostrarMas(!mostrarMas);
    };

    return (
        <div className="contenedorServicio">
            <h2 className="servicioNombre">{servicio}</h2>
            <img className="imagenServicio" src={img} alt="" />
            <p className="descripcionServicio">
                {inicioP}
                <span style={{ fontWeight: 'bold' }}>{servicio}</span>
                {window.innerWidth <= 767 ? (
                    mostrarMas ? (
                        <>
                            {parrafo}
                            <span style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={handleMostrarMas}> Leer menos</span>
                        </>
                    ) : (
                        <>
                            {parrafo.length > 100 ? `${parrafo.slice(0, 100)}...` : parrafo}
                            {parrafo.length > 100 && <span style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={handleMostrarMas}> Leer más</span>}
                        </>
                    )
                ) : (
                    parrafo
                )}
            </p>
        </div>
    );
}
