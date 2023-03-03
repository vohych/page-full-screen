chrome.runtime.onMessage.addListener(console.log);
chrome.omnibox.onInputChanged.addListener(function () {
  console.log('qwdw')
})
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['control.js']
  });
});
//
// Called when the user clicks on the browser action.
chrome.action.onClicked.addListener(tab => {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});
document.getElementById('spanFullScreen').addEventListener('click', function () {
  console.log(this);
})

console.log('wwwwwww');
alert('qdwdqwqwdwq')