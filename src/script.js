/**
 * Script principal
 */

console.log("Debut du script :");

var list_groups = new Array();
var groupActif;

$( document ).ready(function() {
  
  groupActif = createGroup();
  $("#group_id_" + groupActif.id.toString()).addClass("group_actif");
  
  chrome.windows.getAll({populate:true},function(windows)
  {
    // Recuperation des onglets ouverts
    windows.forEach(function(window){
      window.tabs.forEach(function(tab){
	
	// Creation de l'onglet
	var nouvel_onglet = new classOnglet();
	
	nouvel_onglet.id = getNewIdTab();
	nouvel_onglet.id_chrome = tab.id;
	nouvel_onglet.url = tab.url;
	nouvel_onglet.title = tab.title;
	nouvel_onglet.icone = tab.favIconUrl;
	nouvel_onglet.groupe_onglet = -1;

	// Ajout de l'onglet (sans ouvrir l'onglet)
	addGroupTab(groupActif, nouvel_onglet, true);
      });
    });
    
    
    // Recuperation des groupes enregistres
    loadGroup();
    
  });
    
});

