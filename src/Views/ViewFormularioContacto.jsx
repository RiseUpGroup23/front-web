import { useState, useEffect } from 'react'
import { Alert, CircularProgress } from '@mui/material';
import './enviar.css';
import Footer from '../componentes/Reutilizables/Footer';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function FormularioContacto() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        nombre: '',
        nombreEmpresa: '',
        telefono: '',
        email: '',
        descripcion: '',
    })
    const [mensaje, setMensaje] = useState({ type: "hidden", msg: "" })
    const [loading, setLoading] = useState(false)
    const [alreadySent, setAlreadySent] = useState(false)


    useEffect(() => {
        if (mensaje.type !== "hidden") {
            setTimeout(() => {
                setMensaje({ type: "hidden", msg: "" })
            }, 5000)
        }
    }, [mensaje])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'telefono' && !/^\d*$/.test(value)) {
            return;
        }
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await fetch('https://backriseup-production.up.railway.app/enviar-correo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Correo enviado con correctamente');
                setMensaje({ type: "success", msg: 'Correo enviado correctamente' });
                setFormData({
                    nombre: '',
                    nombreEmpresa: '',
                    telefono: '',
                    email: '',
                    descripcion: '',
                });
                setAlreadySent(true)
            }
            setLoading(false)
        } catch (error) {
            console.error('Error de red:', error);
            setMensaje({ type: "error", msg: 'Error al enviar el correo' });
            setLoading(false)
        }

    }

    return (
        <div className="contenedor-servicios">
            <div className="porTitulo">
                <div className="home-pregunta">
                    <strong>¿Necesitas elevar tu presencia?</strong>
                </div>
                <p>Contanos sobre tu proyecto, para poder brindarte el mejor asesoramiento</p>
            </div>
            {!alreadySent ? <form className="formCont-form" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    {mensaje.type !== "hidden" && (
                        <Alert className="mensaje" severity={mensaje.type}>
                            {mensaje.msg}
                        </Alert>
                    )}
                    <div className="formCont-field">
                        <label className="formCont-label">Nombre: <span className='text-red-600 font-bold'>*</span></label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            className={`formCont-input`}
                            placeholder="Escribe tu nombre"
                            required
                        />
                    </div>

                    <div className="formCont-field">
                        <label className="formCont-label">Nombre de la empresa: <span className='text-red-600 font-bold'>*</span></label>
                        <input
                            type="text"
                            name="nombreEmpresa"
                            value={formData.nombreEmpresa}
                            onChange={handleInputChange}
                            className={`formCont-input`}
                            placeholder="RiseUp"
                            required
                        />
                    </div>

                    <div className="formCont-field">
                        <label className="formCont-label">Número de Teléfono: <span className='text-red-600 font-bold'>*</span></label>
                        <input
                            type="text"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            className={`formCont-input`}
                            placeholder="123-456-7890"
                            required
                        />
                    </div>

                    <div className="formCont-field">
                        <label className="formCont-label">Email: <span className='text-red-600 font-bold'>*</span></label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`formCont-input`}
                            placeholder="correo@correo.com"
                            required
                        />
                    </div>

                    <div className="formCont-field">
                        <label className="formCont-label">Contanos a qué se dedica tu empresa: <span className='text-red-600 font-bold'>*</span></label>
                        <textarea
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleInputChange}
                            className={`formCont-textarea`}
                            cols="30"
                            rows="10"
                        />
                    </div>

                    <span className='formCont-required'>* Campos Obligatorios</span>

                    <button type='submit' className='formCont-button'>
                        <div id="fifth" className="buttonBox">
                            {!loading ?
                                <span>¡Subir de Nivel!</span> :
                                <CircularProgress size={25} sx={{ color: "white" }} />}
                        </div>
                    </button>
                </div>
            </form> :
                <div className='alreadySent'>
                    <TaskAltIcon sx={{ fontSize: 125, color: "white" }} />
                    <h2>¡Gracias por contactarnos!</h2>
                    <h3>Te responderemos por correo a la brevedad.</h3>
                </div>}
            <Footer />
        </div>
    );

}