function createTab(tab, onFirstLaunch, callback)
{
  if(!onFirstLaunch)// On ne reouvre pas les onglets deja ouverts
  {
      chrome.tabs.create({url:tab.url, active:false, pinned:tab.pinned}, function(ongletCree) {
      // Recuperation de l'id_chrome !!!!!
      tab.id_chrome = ongletCree.id;
      callback();
    });
  }
}

function closeTab(tab)
{
  chrome.tabs.remove(tab.id_chrome);
}
