import { useState, useEffect } from "react";
import taches from "../data/Checklist.json";
import CheckItem from "../components/CheckItem";

function Checklist() {
  const [checkedTaches, setCheckedTaches] = useState(() => {
    var sauvegarde = localStorage.getItem("checkStore");

    if (sauvegarde != null) {
      return JSON.parse(sauvegarde);
    } else {
      const depart = {};
      taches.forEach((tache) => {
        depart[tache.id] = false;
      });
      return depart;
    }
  });
      useEffect(() => {
      localStorage.setItem("checkStore", JSON.stringify(checkedTaches));
    }, [checkedTaches]);

  const basculeTache = (id) => {
    setCheckedTaches((precedent) => ({
      ...precedent, // copie tout l'objet
      [id]: !precedent[id], // inverse juste la valeur de l'id cliqué
    }));


  };


  console.log(JSON.stringify(checkedTaches));
  return (
    <>
      <ul className="checklist">
        {taches.map((tache) => (
          <CheckItem
            key={tache.id}
            tache={tache}
            cochee={checkedTaches[tache.id]}
            bascule={basculeTache}
          />
        ))}
      </ul>
    </>
  );
}

export default Checklist;
