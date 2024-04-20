import "./stylesContenedorClientes.css";

export default function TarjetaCliente({nombreCliente, imagenCliente}) {
    return (
        <div className="cliente">
            <div className="nombreCliente">
                <h3>{nombreCliente}</h3>
            </div>
            <img src={imagenCliente}/>
        </div>
    )
}