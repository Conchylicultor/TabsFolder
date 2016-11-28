$( document ).ready(function() {

  $("#create_group").click(function() {
    createGroup();
    // Sauvegarde
    saveGroup();
  });

  $("#list_groups").on( "click", ".group_remove", function() {
    var group = getGroup(getGroupId($(this)));

    if(group.id == groupActif.id)
    {
      // On defini le prochain groupe comme etant actif
      var next_group = list_groups[0];// On prend le premier groupe que l'on trouve
      if(next_group.id == groupActif.id)// Si c'est le meme
      {
	// Il existe un autre groupe
	if(list_groups.length > 1)
	{
	  next_group = list_groups[1];
	}
	// Ou pas
	else
	{
	  next_group = createGroup();
	}
      }

      //ferme les onglets du groupe courant et ouvrent ceux du prochain
      setGroupActif(next_group);

      // Sauvegarde
      saveGroup();
    }

    // Modification de l'affichage
    $("#group_id_" + group.id.toString()).remove();

    // Suppression du groupe
    list_groups.splice(list_groups.indexOf(group), 1);

    // Sauvegarde
    saveGroup();
  });

  $("#list_groups").on( "click", ".group_set_actif", function() {
    setGroupActif(getGroup(getGroupId($(this))), function() {
        // Use callback to avoid race condition where the current tab is closed before
        // the new group being opened (could potentially close the windows or terminate
        // the script before complete execution)
        // Sauvegarde
        saveGroup(function() {
            close();
        });
    });
  });

  $("#list_groups").on( "blur", ".group_name", function() {
    group = getGroup(getGroupId($(this)));
    group.name = $(this).val();

    // Sauvegarde
    saveGroup();
  });

});
