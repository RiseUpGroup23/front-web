import React from 'react';
import "../quickplanner.css"

const TabPrincipal: React.FC = () => {
    return (
        <>
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
        </>
    );
};

export default TabPrincipal;