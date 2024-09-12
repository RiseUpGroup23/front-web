import React from 'react';
import "./quickplanner.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Footer from '../../componentes/Reutilizables/Footer';

const ViewQuickPlanner: React.FC = () => {
    return (
        <div className='qp-container'>
            <div className="qp-presentation">
                <h1 className='qp-title'>QuickPlanner <CalendarMonthIcon /></h1>
                <p>Administrador de citas y/o turnos presenciales</p>
            </div>

            <div className="qp5050div">
                <span className="qp5050text">
                    QuickPlanner es la herramienta ideal para llevar al siguiente nivel tu negocio de citas presenciales. Desde ella podés llevar al día tu agenda para no complicarte cada vez que necesites prestar servicios a tus clientes.
                </span>
                <div className="qp5050img">
                    <img src="/QuickPlanner/mock1.png" alt="mock1" />
                    <img src="/QuickPlanner/mock5.png" alt="mock5" className='floatPhone' />
                </div>
            </div>

            <div className="qp5050div inverted">
                <span className="qp5050text">
                    Con QuickPlanner es sencillo, tenés todas tus citas en un solo lugar, a un click de distancia, ya sea en un dispositivo móvil como en tu computadora.
                </span>
                <div className="qp5050img">
                    <img src="/QuickPlanner/mock2.png" alt="mock2" />
                    <img src="/QuickPlanner/mock3.png" alt="mock3" className='floatPhone' />
                </div>
            </div>

            <div className="qp5050div">
                <ul className="qp5050text list">
                    <li>Calendario de citas integrado</li>
                    <li>Sistema de reservas online</li>
                    <li>Gestión de personal y recursos</li>
                    <li>Análisis y reportes</li>
                    <li>Integración con sistemas de pago</li>
                    <li>Personalización y branding</li>
                    <li>Multiplataforma</li>
                </ul>

                <div className="qp5050img">
                    <img src="/QuickPlanner/mock4.png" alt="mock4" />
                </div>
            </div>

            <div className="qp-prices">
                <span className="qp-prices-title">
                    Planes y precios
                </span>
                <div className="qp-prices-items">
                    <div className="qp-prc-item">
                        <span className="qp-prc-item-title">
                            PLAN SUSCRIPCIÓN MENSUAL
                        </span>
                        <span className="qp-prc-item-price">
                            $30.000 <p>/ mes</p>
                        </span>
                        <span className="qp-prc-item-price-before">
                            $40.000
                        </span>
                        <a className="qp-suscrip" href="https://wa.me/3816173548?text=Hola! Quiero suscribirme a QuickPlanner mensualmente...">
                            SUSCRIBIRME
                        </a>
                    </div>

                    <div className="qp-prc-item">
                        <span className="qp-prc-item-title">
                            PLAN SUSCRIPCIÓN ANUAL
                            <div className="discount">
                                <img src='/QuickPlanner/discount.png' alt='discount' />
                                13%
                            </div>
                        </span>
                        <span className="qp-prc-item-price">
                            $315.000 <p>/ mes</p>
                        </span>
                        <span className="qp-prc-item-price-before">
                            $480.000
                        </span>
                        <a className="qp-suscrip" href="https://wa.me/3816173548?text=Hola! Quiero suscribirme a QuickPlanner anualmente...">
                            SUSCRIBIRME
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ViewQuickPlanner;