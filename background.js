import { settings } from "./settings.js";

async function getCombinedCss() {
  const stored = await chrome.storage.local.get(
    settings.map((setting) => setting.key),
  );

  let combinedCss = "";
  for (const setting of settings) {
    if (stored[setting.key]) {
      const response = await fetch(chrome.runtime.getURL(setting.cssFile));
      const css = await response.text();
      combinedCss += css + "\n";
    }
  }

  return combinedCss;
}

async function pushCssToAllTabs() {
  const tabs = await chrome.tabs.query({ url: "*://*.youtube.com/*" });
  const css = await getCombinedCss();
  for (const tab of tabs) {
    chrome.tabs.sendMessage(tab.id, { action: "updateCss", css: css });
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "syncSetting") {
    pushCssToAllTabs();
  } else if (message.action === "getInitialCss") {
    getCombinedCss().then((css) => {
      sendResponse({ css: css });
    });

    return true;
  }
});

chrome.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === "install") {
    const tabs = await chrome.tabs.query({ url: "*://*.youtube.com/*" });
    for (const tab of tabs) {
      try {
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"],
        });
      } catch (err) {
        console.error(`Failed to inject script in tab ${tab.id}: ${err}`);
      }
    }
  }
});
