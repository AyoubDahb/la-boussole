import { useState } from 'react'
import  taches from '../data/Checklist.json'
import CheckItem from '../components/CheckItem';

function Checklist() {

    const [checkedTaches, setCheckedTaches] = useState([]);
    const basculeTache = (id) => {
  if (checkedTaches.includes(id)) {
    // L'id est déjà coché → on le retire
    setCheckedTaches(checkedTaches.filter(i => i !== id));
  } else {
    // L'id n'est pas coché → on l'ajoute
    setCheckedTaches([...checkedTaches, id]);
  }


};

return (
  <>
    <ul className='checklist'>
      {taches.map((tache) => (
      <CheckItem
        tache={tache}
        cochee={checkedTaches.includes(tache.id)}  
        bascule={basculeTache}/>
      ))}
    </ul>
  </>
);
}

export default Checklist