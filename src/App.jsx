import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useSmoothScroll } from './hooks/useLenis'
import PageTransition from './components/PageTransition'
import WebGLTransition from './components/WebGLTransition'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Servicios from './pages/Servicios'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'
import ProyectoTemplate from './pages/ProyectoTemplate'

function AppRoutes() {
  const location = useLocation()
  useSmoothScroll()

  return (
    <>
      <WebGLTransition />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/quienes-somos" element={<PageTransition><QuienesSomos /></PageTransition>} />
        <Route path="/servicios" element={<PageTransition><Servicios /></PageTransition>} />
        <Route path="/proyectos" element={<PageTransition><Proyectos /></PageTransition>} />
        <Route path="/contacto" element={<PageTransition><Contacto /></PageTransition>} />
        <Route path="/proyectos/:id" element={<PageTransition><ProyectoTemplate /></PageTransition>} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
