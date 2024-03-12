import Tarjeta from "./Tarjeta";
import "../../../public/Fondos/Imagen4.jpg"

export default function ContenedorTarjeta() {
    const TarjetaData = [
        { nombre: 'Cliente 01', imagen: '../../../public/Fondos/Imagen4.jpg', link: "https://portafolio-ernesto-aguirre.netlify.app/#inicio" },
        { nombre: 'Cliente 02', imagen: '../../../public/Fondos/Imagen4.jpg', link: "https://portafolio-ernesto-aguirre.netlify.app/#inicio" },
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