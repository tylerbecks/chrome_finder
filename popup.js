/**
 * Get the current URL.
 *
 * @param {function(string)} callback called when the URL of the current tab
 *   is found.
 */
function getCurrentTabId(callback) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    callback(activeTab.id);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabId(function(activeTabId) {
    var input = document.getElementById('input-search');
    input.addEventListener('change', () => {
      console.log('input changed! input:', input);
      chrome.tabs.sendMessage(activeTabId, {
        message: "search_change",
        content: input.value
      });
    });
  })
});
