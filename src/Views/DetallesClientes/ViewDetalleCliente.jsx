import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../componentes/Reutilizables/Footer";
import clientesData from "./clientesData";
import { useParams } from "react-router-dom";
import "./ViewDetalleCliente.css";
import Tarjeta from "../../componentes/ComponentesVistaLanding/ContenedorServicio/TarjetaServicio";
import LanguageIcon from '@mui/icons-material/Language';

export default function DetalleCliente() {
    const { location } = useParams();
    const cliente = clientesData.find(cliente => cliente.location === location);
    const { logo, description, link, name, secondLine, services, screenshots } = cliente;

    const TarjetaData = [
        { id: "diseno", nombre: 'Diseño y Desarrollo Web', imagen: '/Servicios/DesarrolloWeb.png' },
        { id: "auto", nombre: 'Automatización de Procesos', imagen: '/Servicios/AutomatizacionProcesos.png' },
        { id: "tercerizacion", nombre: 'Terciarización de Herramientas', imagen: '/Servicios/Terciarizacion.png' },
        { id: "rebranding", nombre: 'Rebranding', imagen: '/Servicios/Rebranding.png' },
    ]
    return (
        <div className="detailCont">
            <div className="detailTitleImage">
                <div className="detailTitleText">
                    <h1>
                        {name}
                        {secondLine && <p>{secondLine}</p>}
                    </h1>
                </div>
                <div className="detailTitleImg">
                    <img src={logo} alt={name} />
                </div>
            </div>
            <div className="detailContent">
                <div className="detailTitleDescription">
                    <span>
                        {description}
                    </span>
                </div>
                <div className="detailServices">
                    <span className="detailContentTitle">Capturas de pantalla:</span>
                    <div className="photosCont">
                        {screenshots?.map((photo, index) => (
                            <img src={photo} alt={`photo-${index + 1}`} key={`photo-${index + 1}`} />
                        ))}
                    </div>
                </div>
                <div className="detailServices">
                    <span className="detailContentTitle">Servicios realizados:</span>
                    <div className="detailCardsCont">
                        {services?.map((srvc, index) => {
                            const service = TarjetaData.find(e => e.id === srvc)
                            return (
                                <Tarjeta key={index} nombre={service.nombre} imagen={service.imagen} />
                            )
                        })}
                    </div>
                </div>
                <div className="buttonVerWeb">
                    <div></div>
                    <a href={link} target="#blank">
                        Visitar página web
                        <LanguageIcon />
                    </a>
                    <div className="linea-separadora" />
                </div>
            </div>
            <Footer />
        </div>
    )
}