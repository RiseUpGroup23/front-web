import ContenedorTarjetas from "./ContenedorTarjetas";

export default function ContenedorClientes() {
    return (
        <div>
            <div className="bg-zinc-300 w-full h-0.5" />
            <h1 className="text-white text-center md:text-5xl text-3xl font-medium mt-5">Portafolio de la Empresa</h1>
            <h1 className="text-white text-center md:text-3xl text-2xl font-medium md:mt-10  m-5 md:mb-10">Te mostramos nuestros proyectos realizados con éxito</h1>
            <ContenedorTarjetas/>
        </div>
    )
}