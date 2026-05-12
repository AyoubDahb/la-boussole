import logoHS from '../assets/images/LogoHS.jpg'
import logoAC from '../assets/images/LogoAC.png'

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <img src={logoHS} alt="Logo Lycée Henri Sellier" className="logo" />
        
      </div>

      <div className="topbar-center">
        <h1>🧭 LA BOUSSOLE</h1>
        <p>Votre guide au lycée Henri Sellier</p>
      </div>

      <div className="topbar-right">
        <img src={logoAC} alt="Logo Académie de Créteil" className="logo" />
        <span>Académie de Créteil</span>
      </div>
    </header>
  );
}