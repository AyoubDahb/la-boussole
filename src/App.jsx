import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Accueil from './pages/Accueil'
import Plan from './pages/Plan'
import Documents from './pages/Documents'
import Checklist from './pages/Checklist'
import logoHS from './assets/LogoHS.jpg'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar logoSrc={logoHS} />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/checklist" element={<Checklist />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App