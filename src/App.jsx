import { Landing, FormularioContacto, Clientes } from "./componentes/Views/index"
import { Route, Routes } from "react-router-dom"
import NavBar from "./componentes/Nuevos/NavBar"

export default function App() {
  return (
    <div>
      <NavBar/>
      
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/enviar-correo" element={<FormularioContacto />} />
        <Route exact path="/nuestros-clientes" element={<Clientes/>} />
      </Routes>
    </div>
  )
}