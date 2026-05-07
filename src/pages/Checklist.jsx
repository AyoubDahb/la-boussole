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

  const totalTaches = taches.length;
  const tachesCochees = Object.values(checkedTaches).filter(
    (value) => value,
  ).length;
  const progression = (tachesCochees / totalTaches) * 100;

  console.log(Object.values(checkedTaches).filter((value) => value));

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
      <progress className="progressBar" value={progression} max={100}></progress>
    </>
  );
}

export default Checklist;
