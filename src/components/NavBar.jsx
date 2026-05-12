import { NavLink } from 'react-router-dom'
import * as TablerIcons from '@tabler/icons-react'
import { ONGLETS } from '../data/navigation'
import '../index.css'

function toTablerName(icone) {
  return 'Icon' + icone
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')
}

function NavBar({ onglet, setOnglet }) {
  return (
    <nav className="nav">
      <div className="nav-onglets">
        {ONGLETS.map((item) => {
          const Icon = TablerIcons[toTablerName(item.icone)]
          return (
            <NavLink
              key={item.id}
              to={`/${item.id}`}
              className={ onglet === item.id ? 'active' : ''}
              onClick={() => setOnglet(item.id)}
            >
              {Icon && <Icon size={16} stroke={1.7} />}
              {item.label}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default NavBar