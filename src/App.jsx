import Landing from "./Views/ViewLanding"
import FormularioContacto from "./Views/ViewFormularioContacto"
import Clientes from "./Views/ViewClientes"
import Servicios from "./Views/ViewServicios"
import DetalleCliente from "./Views/DetallesClientes/ViewDetalleCliente"
import QuickPlanner from "./Views/QuickPlanner/ViewQuickPlanner"
import { Route, Routes } from "react-router-dom"
import NavBar from "./componentes/Reutilizables/NavBar"

export default function App() {
  return (
    <div style={{ fontFamily: "Roboto" }}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/enviar-correo" element={<FormularioContacto />} />
        <Route exact path="/nuestros-clientes" element={<Clientes />} />
        <Route exact path="/servicios" element={<Servicios />} />
        <Route exact path="/clientes/:name" element={<DetalleCliente />} />
        <Route exact path="/quickplanner" element={<QuickPlanner />} />
      </Routes>
    </div>
  )
}