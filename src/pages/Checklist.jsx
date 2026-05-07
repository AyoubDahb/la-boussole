import { useState } from 'react'
import  taches from '../data/Checklist.json'
import CheckItem from '../components/CheckItem';

function Checklist() {

    const [checkedTaches, setCheckedTaches] = useState(() =>{     
      
      const depart = {}
      taches.forEach(tache =>{

      depart[tache.id] = false

    })
    return depart
  }); 

    const basculeTache = (id) => {

      setCheckedTaches(precedent => ({
    ...precedent,       // copie tout l'objet
    [id]: !precedent[id] // inverse juste la valeur de l'id cliqué
    }))
};

console.log(JSON.stringify(checkedTaches))
return (
  <>
    <ul className='checklist'>
      {taches.map((tache) => (
      <CheckItem
        key={tache.id}        
        tache={tache}
        cochee={checkedTaches[tache.id]}  
        bascule={basculeTache}/>
      ))}
    </ul>
  </>
);
}

export default Checklist