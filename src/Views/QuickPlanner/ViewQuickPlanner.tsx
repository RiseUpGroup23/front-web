import React from 'react';
import "./quickplanner.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Footer from '../../componentes/Reutilizables/Footer';
import TabPrincipal from './tabs/TabPrincipal';
import TabFuncionalidades from './tabs/TabFuncionalidades';
import { CSSTransition } from 'react-transition-group';

const tabs = { "Principal": <TabPrincipal />, "Funcionalidades": <TabFuncionalidades /> };

const ViewQuickPlanner: React.FC = () => {
    const [tab, setTab] = React.useState(0);
    return (
        <div className='qp-container'>
            <div className="qp-presentation">
                <h1 className='qp-title'>QuickPlanner <CalendarMonthIcon /></h1>
                <p>Administrador de citas y/o turnos presenciales</p>
            </div>
            <div className="qp-tabs">
                {Object.keys(tabs).map((t, i) => (
                    <div key={i} className={`qp-tab ${tab === i ? 'active' : ''}`} onClick={() => setTab(i)}>{t}</div>
                ))}
            </div>

            {Object.values(tabs).map((t, i) => (
                <CSSTransition key={i} in={tab === i} timeout={300} classNames="fade" unmountOnExit>
                    {t}
                </CSSTransition>
            ))}

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
                                35%
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