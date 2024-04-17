import Tarjeta from "./TarjetaServicio"

export default function Servicios() {
  const TarjetaData = [
    // { nombre: 'Asistentes de IA Personalizados', imagen: 'Iconos/Asistentes de IA Personalizados.svg' },
    { nombre: 'Diseño y Desarrollo de Páginas Web', imagen: 'Iconos/Diseño y Desarrollo de Páginas Web.svg' },
    { nombre: 'Automatización de Procesos', imagen: 'Iconos/Automatización de Procesos.svg' },
    { nombre: 'Imagen en Redes Sociales', imagen: 'Iconos/Imagen en Redes Sociales.svg' },
    { nombre: 'Terciarización de Herramientas', imagen: '/Iconos/Terciarización de Herramientas.svg' },
    // { nombre: 'Anuncios con IA', imagen: 'Iconos/Anuncios con IA.svg' },
    { nombre: 'Rebranding', imagen: 'Iconos/Rebranding.svg' },
  ]

  return (
    <div className="flex flex-col items-center">
      <div className="bg-zinc-300 w-full h-0.5" />
      <div className="justify-center text-white text-center text-4xl md:text-5xl font-medium my-10">
        Servicios que ofrecemos
      </div>
      <div className="flex flex-wrap justify-center gap-5 mx-4 sm:gap-10 mt-5">
        {TarjetaData.map((card, index) => (
          <Tarjeta key={index} nombre={card.nombre} imagen={card.imagen} />
        ))}
      </div>
    </div>
  )
}