import { Landing, FormularioContacto, Clientes, AvisoApp, Servicios } from "./componentes/Views/index"
import { Route, Routes } from "react-router-dom"
import NavBar from "./componentes/Landing/NavBar"
import Footer from "./componentes/Landing/Footer"

export default function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/enviar-correo" element={<FormularioContacto />} />
        <Route exact path="/nuestros-clientes" element={<Clientes />} />
        <Route exact path="/servicios" element={<Servicios />} />
        <Route exact path="/aviso" element={<AvisoApp />} />
      </Routes>
    </div>
  )
}