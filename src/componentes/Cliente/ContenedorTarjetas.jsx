import Tarjeta from "./Tarjeta";
import "../../../public/Fondos/Imagen4.jpg"

export default function ContenedorTarjeta() {
    const TarjetaData = [
        { nombre: 'Centro Neuropsicologico', imagen: '../../../public/Clientes/Neo.png', link: "https://portafolio-ernesto-aguirre.netlify.app/#inicio" },
        { nombre: 'Rama Store', imagen: '../../../public/Clientes/Ramas.png', link: "https://portafolio-ernesto-aguirre.netlify.app/#inicio" },
    ]

    return (
        <div>
            <div className="galeria">
                {TarjetaData.map((card, index) => (
                    <Tarjeta key={index} nombre={card.nombre} imagen={card.imagen} link={card.link} />
                ))}
            </div>
        </div>
    )
}