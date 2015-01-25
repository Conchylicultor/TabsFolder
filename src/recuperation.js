/**
 * Fonctions de recherche 
 */

function getNewId() 
{
  var valide = false;
  var id = 0;
  while(!valide)
  {
    valide = true;
    
    for (var i = 0 ; i < list_groups.length ; ++i)
    {
      // On verifie si l'id n'existe pas
      if(list_groups[i].id == id)
      {
	valide = false;
      }
    }
    
    id++;
  }
  return id-1;
}


var id_compteur = 0;

function getNewIdTab()
{
  id_compteur++;
  return id_compteur;
}

function getGroupId(element) 
{
  var id_nom = "-1";
  
  // On verifie d'abord que l'element n'est pas deja un groupe
  if(element.hasClass("group_id"))
  {
    id_nom = element.attr("id");
  }
  else
  {
    id_nom = element.closest(".group_id").attr("id");
  }
  
  return parseInt(id_nom.replace("group_id_",""));
}

function getGroup(id) 
{
  for(var i=0 ; i < list_groups.length ; i++)
  {
    if(list_groups[i].id == id)
    {
      return list_groups[i];
    }
  }
  console.error("Groupe non trouve : " + id.toString());
} 

function getGroupByTab(tab_id)
{
  tab_id = parseInt(tab_id.replace("tab_id_",""));
  
  for(var i=0 ; i < list_groups.length ; i++)
  {
    for(var j=0 ; j < list_groups[i].list_tabs.length ; j++)
    {
      if(list_groups[i].list_tabs[j].id == tab_id)
      {
	return list_groups[i];
      }
    }
  }
  console.error("Aucun groupe ne contient : " + tab_id.toString());
}
