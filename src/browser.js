function createTab(tab, onFirstLaunch)
{
  if(!onFirstLaunch)// On ne reouvre pas les onglets deja ouverts
  {
      chrome.tabs.create({url:tab.url, active:false}, function(ongletCree) {
      // Recuperation de l'id_chrome !!!!!
      tab.id_chrome = ongletCree.id;
    });
  }
}

function closeTab(tab)
{
  chrome.tabs.remove(tab.id_chrome);
}
