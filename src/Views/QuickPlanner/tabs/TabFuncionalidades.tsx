import React from 'react';

const TabFuncionalidades: React.FC = () => {
    return (
        <>
            <div className="qp5050div">
                <span className="qp5050text">
                    <strong>Calendario de citas integrado</strong>
                    <br></br>
                    Un calendario interactivo donde se pueden ver todas las citas programadas. Permite agregar, modificar y cancelar citas fácilmente.
                    <br></br>
                    <br></br>
                    <strong>Sistema de reservas online</strong>
                    <br></br>
                    Capacidad para que los clientes reserven citas directamente desde la página web. Muestra los horarios disponibles y permite la selección de servicios específicos.
                </span>
                <div className="qp5050img">
                    <img src="/QuickPlanner/mock6.png" alt="mock6" />
                    <img src="/QuickPlanner/mock7.png" alt="mock7" className='floatPhone' />
                </div>
            </div>

            <div className="qp5050div inverted">
                <span className="qp5050text">
                    <strong>Gestión de personal y recursos</strong>
                    <br></br>
                    Herramienta para asignar personal a diferentes servicios y gestionar los recursos necesarios para cada turno.
                    <br></br>
                    <br></br>
                    <strong>Análisis y reportes</strong>
                    <br></br>
                    Generación de informes sobre el desempeño del negocio, como el número de citas realizadas, ingresos generados, cancelaciones, entre otros.
                </span>
                <div className="qp5050img">
                    <img src="/QuickPlanner/mock8.png" alt="mock8" />
                </div>
            </div>

            <div className="qp5050div">
                <span className="qp5050text">
                    <strong>Integración con sistemas de pago</strong>
                    <br></br>
                    Facilidad para procesar pagos online o en persona al finalizar cada servicio.
                    <br></br>
                    <br></br>
                    <strong>Personalización y branding </strong>
                    <br></br>
                    Capacidad para personalizar la página de reserva y la aplicación con el branding de la tienda, incluyendo colores, logos y estilos visuales.
                </span>
                <div className="qp5050img">
                    <img src="/QuickPlanner/mock9.png" alt="mock9" />
                </div>
            </div>
        </>
    );
};

export default TabFuncionalidades;