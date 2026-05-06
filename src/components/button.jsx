
import { useNavigate } from 'react-router-dom'

function Button() {
  const navigate = useNavigate()

  return (      
      <div>
        <button onClick={() => navigate("/")}>
          Retour à l'accueil
        </button>
      </div>

  )
}

export default Button