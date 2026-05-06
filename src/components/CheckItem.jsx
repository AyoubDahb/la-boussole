function CheckItem({ tache, cochee, bascule }) {
  return (
    <li
      className={`checklist-item ${cochee ? "cochee" : ""}`}
      onClick={() => bascule(tache.id)}
    >
      <div className="checklist-checkbox">
        {cochee ? "✓" : ""}
      </div>
      <div className="checklist-texte">
        <span className="checklist-titre">{tache.titre}</span>
        <span className="checklist-desc">{tache.description}</span>
      </div>
    </li>
  )
}

export default CheckItem