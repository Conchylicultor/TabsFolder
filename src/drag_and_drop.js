function allowDrop(ev)
{
  ev.preventDefault();
}

function dragLienBegin(ev)
{
  ev.dataTransfer.setData("Id_lien",ev.target.id);
}

function dropLienVersGroupe(ev)
{
  ev.preventDefault();
  
  // Recuperation de l'id de la cible
  var id = getGroupId($(ev.target));
  
  // Suppression du lien initial
  var tab = removeTabGroup(ev.dataTransfer.getData("Id_lien"));
  
  // Rajout dans le groupe
  addGroupTab(getGroup(id), tab);
  
  // Sauvegarde
  saveGroup();
  
  // On a fini de gerer le drop a tous les niveaux
  ev.stopPropagation();
} 
