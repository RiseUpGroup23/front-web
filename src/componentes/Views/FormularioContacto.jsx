import { useState, useEffect } from 'react'
import './enviar.css';

export default function FormularioContacto() {
    useEffect(() => {
        // Desplazar la página hacia arriba al renderizar el componente
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
    const [mensaje, setMensaje] = useState('')

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
                // console.log(formData);
                // Hay que ver este error
                const response = await fetch('https://backriseup-production.up.railway.app/enviar-correo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                    // mode: 'no-cors',
                });
                // console.log(response);
                if (response.ok) {
                    console.log('Correo enviado con éxito');
                    setMensaje('Correo enviado correctamente');
                    setFormData({
                        nombre: '',
                        nombreEmpresa: '',
                        telefono: '',
                        email: '',
                        descripcion: '',
                    });
                } else {
                    console.error('Error al enviar el correo');
                    setMensaje('Error al enviar el correo');
                }
            } catch (error) {
                console.error('Error de red:', error);
                setMensaje('Error al enviar el correo');
            }
        }
    }

    setTimeout(() => {
        setMensaje('')
    }, 2000)

    return (
        <div className="flex flex-col items-center mt-5">
            <div className="justify-center text-white text-center text-3xl md:text-4xl lg:text-4xl font-medium">
                ¿Necesitas elevar tu <br /> presencia?
            </div>
            <div className="justify-center text-white text-center text-1xl mt-6 md:text-2xl lg:text-2xl font-medium">
                Contanos sobre tu proyecto, para <br /> poder brindarte el mejor <br /> asesoramiento
            </div>
            <form className="rounded-3xl mt-6 border border-white px-10 py-8 text-white " onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    {mensaje && (
                        <div className={`bg-${mensaje.includes('correctamente') ? 'green' : 'red'}-600 mb-3 py-2 rounded-2xl text-center`}>
                            {mensaje}
                        </div>
                    )}
                    <div className="flex flex-col">
                        <label>Nombre: <span className='text-red-600 font-bold'>*</span></label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            className={`text-black rounded-md ${errors.nombre && 'border-red-500'}`}
                            placeholder="  Ernesto"
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
                            className={`text-black rounded-md ${errors.nombreEmpresa && 'border-red-500'}`}
                            placeholder="  RiseUp"
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
                            className={`text-black rounded-md ${errors.telefono && 'border-red-500'}`}
                            placeholder="  123-456-7890"
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
                            className={`text-black rounded-md ${errors.email && 'border-red-500'}`}
                            placeholder="  correo@correo.com"
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
                            className="text-black resize-none h-24 rounded-md"
                        />
                    </div>

                    <span className='text-red-600 mt-2'>* Campos Obligatorios</span>

                    <button type='submit' className='mt-5 self-center'>
                        <div id="fifth" className="buttonBox md:w-[400px]">
                            <span>¡Subir de Nivel!</span>
                        </div>
                    </button>
                </div>
            </form>
            <div>
                <img src="LogoRiseUp/Logo.png" className="w-[100px] lg:w-[150px] mt-10" />
            </div>
            <div className="flex w-full lg:w-[220px] gap-4 sm:gap-5 px-2 sm:px-5 my-2 justify-center">
                <img src="Iconos/Instagram.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
                <img src="Iconos/LinkedIn.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
                <img src="Iconos/Facebook.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
            </div>
            <div className="bg-zinc-300 w-[50%] h-0.5 mt-5" />
            <div className="mt-6 text-white text-xl sm:text-2xl lg:text-2xl font-light">
                Copyright © 2024 RiseUp inc.
            </div>
        </div>
    )
}