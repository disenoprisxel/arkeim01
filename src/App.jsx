import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Servicios from './pages/Servicios'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'
import ProyectoTemplate from './pages/ProyectoTemplate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos/:id" element={<ProyectoTemplate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
