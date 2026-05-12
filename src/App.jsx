import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Topbar from './components/TopBar'
import NavBar from './components/NavBar'

function App() {
  const [onglet, setOnglet] = useState('accueil')

  return (
    <BrowserRouter>
      <div className="app">
        <Topbar />
        <NavBar onglet={onglet} setOnglet={setOnglet} />
          
        <main>

        </main>
      </div>
    </BrowserRouter>
  )
}

export default App