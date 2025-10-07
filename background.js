import { settings } from "./settings.js";

async function getCombinedCss() {
  const stored = await chrome.storage.local.get(
    settings.map((setting) => setting.key),
  );

  let combinedCss = "";
  for (const setting of settings) {
    if (stored[setting.key]) {
      combinedCss += setting.css + "\n";
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
