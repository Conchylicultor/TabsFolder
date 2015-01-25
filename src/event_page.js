chrome.browserAction.onClicked.addListener(function(wtf) {
  // Ouverture 
  chrome.tabs.query({'url':chrome.extension.getURL('manager.html')}, function(tabs) {
    // Fermeture de tous les onglets courrants
    for(var i = 0 ; i < tabs.length ; ++i)
    {
      chrome.tabs.remove(tabs[i]['id']);
    }
    
    // Creation de l'onglet
    chrome.tabs.create({'url': chrome.extension.getURL('manager.html')}, function(tab) {
      // Tab opened.
    });
  });
});
