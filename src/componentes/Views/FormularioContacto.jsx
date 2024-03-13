import { useState, useEffect } from 'react'
import { Alert, CircularProgress } from '@mui/material';
import './enviar.css';
import Footer from '../Landing/Footer';

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

    const [errors, setErrors] = useState({})
    const [mensaje, setMensaje] = useState({ type: "hidden", msg: "" })
    const [loading, setLoading] = useState(false)


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
        setErrors({ ...errors, [name]: '' });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const newErrors = {};
        if (!formData.nombre.trim()) {
            newErrors.nombre = 'Este campo es obligatorio';
        }

        if (!formData.nombreEmpresa.trim()) {
            newErrors.nombreEmpresa = 'Este campo es obligatorio';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Este campo es obligatorio';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Ingresa un correo electrónico válido';
        }

        if (formData.telefono.trim() && !/^\d{3}\d{3}\d{4}$/.test(formData.telefono)) {
            newErrors.telefono = 'Ingresa un número de teléfono válido';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
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
                }
                setLoading(false)
            } catch (error) {
                console.error('Error de red:', error);
                setMensaje({ type: "error", msg: 'Error al enviar el correo' });
                setLoading(false)
            }
        }
    }

    return (
        <div className="flex flex-col items-center mt-5">
            <div className="justify-center text-white text-center text-3xl md:text-4xl lg:text-4xl font-medium">
                ¿Necesitas elevar tu <br /> presencia?
            </div>
            <div className="justify-center text-white text-center text-1xl mt-6 md:text-2xl lg:text-2xl font-medium">
                Contanos sobre tu proyecto, para <br /> poder brindarte el mejor <br /> asesoramiento
            </div>
            <form className="rounded-3xl mt-6 border px-10 py-8 text-white mb-10" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    {mensaje.type !== "hidden" && (
                        <Alert className="mensaje" severity={mensaje.type}>
                            {mensaje.msg}
                        </Alert>
                    )}
                    <div className="flex flex-col">
                        <label>Nombre: <span className='text-red-600 font-bold'>*</span></label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            className={`text-black rounded-md ${errors.nombre && 'border-red-500'} p-2`}
                            placeholder="Escribe tu nombre"
                            required
                        />
                        {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}
                    </div>
                    <div className="flex flex-col mt-5">
                        <label>Nombre de la Empresa: <span className='text-red-600 font-bold'>*</span></label>
                        <div></div>
                        <input
                            type="text"
                            name="nombreEmpresa"
                            value={formData.nombreEmpresa}
                            onChange={handleInputChange}
                            className={`text-black rounded-md ${errors.nombreEmpresa && 'border-red-500'} p-2`}
                            placeholder="RiseUp"
                            required
                        />
                        {errors.nombreEmpresa && <p className="text-red-500">{errors.nombreEmpresa}</p>}
                    </div>
                    <div className="flex flex-col mt-5">
                        <label>Número de Teléfono:</label>
                        <input
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            className={`text-black rounded-md ${errors.telefono && 'border-red-500'} p-2`}
                            placeholder="123-456-7890"
                        />
                        {errors.telefono && <p className="text-red-500">{errors.telefono}</p>}
                    </div>
                    <div className="flex flex-col mt-5">
                        <label>Email: <span className='text-red-600 font-bold'>*</span></label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`text-black rounded-md ${errors.email && 'border-red-500'} p-2`}
                            placeholder="correo@correo.com"
                            required
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    <div className="flex flex-col mt-5">
                        <label>Contanos a qué se dedica tu empresa:</label>
                        <textarea
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleInputChange}
                            cols="30"
                            rows="10"
                            className="text-black resize-none h-24 rounded-md p-2"
                        />
                    </div>

                    <span className='text-red-600 mt-2'>* Campos Obligatorios</span>

                    <button type='submit' className='mt-5 self-center'>
                        <div id="fifth" className="buttonBox md:w-[400px]">
                            {!loading ?
                                <span>¡Subir de Nivel!</span> :
                                <CircularProgress size={25} sx={{ color: "white" }} />}
                        </div>
                    </button>
                </div>
            </form>
            <Footer/>
        </div>
    )
}