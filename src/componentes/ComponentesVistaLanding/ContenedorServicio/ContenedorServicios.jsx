import Tarjeta from "./TarjetaServicio"
import '../style.css';

export default function ContenedorServicios() {
  const TarjetaData = [
    { nombre: 'Diseño y Desarrollo Web', imagen: 'Iconos/Diseño y Desarrollo de Páginas Web.svg' },
    { nombre: 'Automatización de Procesos', imagen: 'Iconos/Automatización de Procesos.svg' },
    // { nombre: 'Imagen en Redes Sociales', imagen: 'Iconos/Imagen en Redes Sociales.svg' },
    { nombre: 'Terciarización de Herramientas', imagen: '/Iconos/Terciarización de Herramientas.svg' },
    { nombre: 'Rebranding', imagen: 'Iconos/Rebranding.svg' },
  ]

  return (
    <div className="contenedor-servicios">
      <div className="home-pregunta">
        <strong>Servicios que ofrecemos</strong>
      </div>
      <div className="galeria-servicios">
        {TarjetaData.map((card, index) => (
          <Tarjeta key={index} nombre={card.nombre} imagen={card.imagen} />
        ))}
      </div>
    </div>
  )
}