import Tarjeta from "./TarjetaServicio"
import '../style.css';

export default function ContenedorServicios() {
  const TarjetaData = [
    { nombre: 'Diseño y Desarrollo Web', imagen: 'Servicios/DesarrolloWeb.png' },
    { nombre: 'Automatización de Procesos', imagen: '/Servicios/AutomatizacionProcesos.png' },
    // { nombre: 'Imagen en Redes Sociales', imagen: 'Iconos/Imagen en Redes Sociales.svg' },
    { nombre: 'Terciarización de Herramientas', imagen: '/Servicios/Terciarizacion.png' },
    { nombre: 'Rebranding', imagen: '/Servicios/Rebranding.png' },
  ]

  return (
    <div className="contenedor-servicios">
      <div className="porTitulo">
        <div className="home-pregunta">
          <strong>Servicios que ofrecemos</strong>
        </div>
      </div>
      <div className="galeria-servicios">
        {TarjetaData.map((card, index) => (
          <Tarjeta key={index} nombre={card.nombre} imagen={card.imagen} />
        ))}
      </div>
    </div>
  )
}