chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const tabUrl = tab.url ?? tab.pendingUrl;
    if (
      changeInfo.status === "complete" &&
      tabUrl &&
      tabUrl.includes("linkedin.com")
    ) {
      chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: ["hide.css"],
      });
    }
  });


function runLinkedinScript() {
    chrome.tabs.executeScript({
        file: 'linkedin.js'
    });
    return true;
}
