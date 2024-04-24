import React from "react";
import Footer from "../../componentes/Reutilizables/Footer";
import { Link } from "react-router-dom";
import "./ViewDetalleCliente.css";
// import Tarjeta from "../../componentes/ComponentesVistaLanding/ContenedorServicio/TarjetaServicio";

export default function DetalleCliente() {
    // const TarjetaData = [
    //     { nombre: 'Diseño y Desarrollo de Páginas Web', imagen: 'Iconos/Diseño y Desarrollo de Páginas Web.svg' },
    //     { nombre: 'Automatización de Procesos', imagen: 'Iconos/Automatización de Procesos.svg' },
    //     { nombre: 'Imagen en Redes Sociales', imagen: 'Iconos/Imagen en Redes Sociales.svg' },
    //     { nombre: 'Terciarización de Herramientas', imagen: '/Iconos/Terciarización de Herramientas.svg' },
    //     { nombre: 'Rebranding', imagen: 'Iconos/Rebranding.svg' },
    //   ]

    return (
        <div className="contenedorViewDetalleCliente">
            <h1 className="nameCliente">NeoSalud Centro Neuropsicológico</h1>
            <img src="/Clientes/Neo.png" className="imagenCliente" />

            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt totam nulla maiores deleniti nihil tempore laboriosam vero, praesentium ad mollitia quibusdam inventore ratione, cupiditate blanditiis molestiae? Nobis ipsum quo blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sapiente rem, molestiae temporibus provident alias officia omnis magnam aut beatae excepturi magni quae mollitia accusantium. Aspernatur voluptatibus molestias praesentium nesciunt.</p>

            {/* <h2 className="servicesClients">Servicios Realizados:</h2> */}

            {/* <div className="flex flex-col items-center">
                <div className="bg-zinc-300 w-full h-0.5" />
                <div className="justify-center text-white text-center text-4xl md:text-5xl font-medium my-10">
                    Servicios que ofrecemos
                </div>
                <div className="flex flex-wrap justify-center gap-5 mx-4 sm:gap-10 mt-5">
                    {TarjetaData.map((card, index) => (
                        <Tarjeta key={index} nombre={card.nombre} imagen={card.imagen} />
                    ))}
                </div>
            </div> */}

            <div id="fifthz" className="buttonBoz md:w-[500px] md:mt-5 md:mb-5">
                <a href="https://neosalud.org/" target="_blank">
                    <button className='buttonz md:text-3xl md:py-3'>Visitar su Página Web</button>
                </a>
            </div>

            <div className="bg-zinc-300 h-0.5" style={{ width: "90%", marginTop: "1%" }}>
                <div className="flex flex-col items-center">
                    <div className="flex w-full lg:w-[220px] gap-4 sm:gap-5 px-2 sm:px-5 md:mt-10 mt-4 justify-center">
                        <Link to="/aviso">
                            <img src="Iconos/Instagram.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
                        </Link>
                        <Link to="/aviso">
                            <img src="Iconos/LinkedIn.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
                        </Link>
                        <Link to="/aviso">
                            <img src="Iconos/Facebook.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
                        </Link>
                    </div>
                    <a href="#inicio">
                        <img src="LogoRiseUp/Logo.png" className="w-[100px] lg:w-[150px] mt-2" />
                    </a>
                </div>
            </div>
        </div>
    )
};