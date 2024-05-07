import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../componentes/Reutilizables/Footer";
import clientesData from "./clientesData";
import { useParams } from "react-router-dom";
import "./ViewDetalleCliente.css";

export default function DetalleCliente() {
    const { name } = useParams();
    const cliente = clientesData.find(cliente => cliente.name === name);
    const { img, description, link } = cliente;

    return (
        <div className="contenedorViewDetalleCliente">
            <h1 className="nameCliente">{name}</h1>
            <img src={img} className="imagenCliente" />

            <p className="description">{description}</p>

            <div id="fifthz" className="buttonBox md:w-[500px] md:mt-7 mt-3 md:mb-0 mb-3 md:text-3xl px-6">
                <a href={link} target="_blank">
                    <button>Visitar su Página Web</button>
                </a>
            </div>

            <div className="bg-zinc-300 h-0.5" style={{ width: "90%", marginTop: "2%" }}>
                <div className="flex flex-col items-center">
                    <div className="flex w-full lg:w-[220px] gap-4 sm:gap-5 px-2 sm:px-5 md:mt-10 mt-4 justify-center">
                        <a href="https://www.instagram.com/riseup_code?igsh=MTZqN2kwM3hveDlpZQ==" target="_blank">
                            <img src="/Iconos/Instagram.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/company/riseuptuc/" target="_blank">
                            <img src="/Iconos/LinkedIn.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61556582908815" target="_blank">
                            <img src="/Iconos/Facebook.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
                        </a>
                    </div>
                    <a href="#inicio">
                        <img src="/LogoRiseUp/Logo.png" className="w-[100px] lg:w-[150px] mt-2" />
                    </a>
                </div>
            </div>
        </div>
    )
};