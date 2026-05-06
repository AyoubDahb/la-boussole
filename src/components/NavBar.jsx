import { NavLink } from 'react-router-dom'
import '../App.css'

function NavBar({ logoSrc }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logoSrc} alt="Logo" />
        <span>La Boussole</span>
      </div>
      <div className="nav-onglets">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/plan">Plan</NavLink>
        <NavLink to="/documents">Documents</NavLink>
        <NavLink to="/checklist">Checklist</NavLink>
      </div>
    </nav>
  )
}

export default NavBar