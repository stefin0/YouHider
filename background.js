import { settings } from "./settings.js";

const syncingTabs = new Set();

async function syncCssForTab(tabId) {
  if (syncingTabs.has(tabId)) {
    return;
  }

  syncingTabs.add(tabId);

  try {
    const stored = await chrome.storage.local.get(
      settings.map((setting) => setting.key),
    );

    for (const setting of settings) {
      try {
        await chrome.scripting.removeCSS({
          target: { tabId: tabId },
          css: setting.css,
        });
      } catch (e) {}

      if (stored[setting.key]) {
        try {
          await chrome.scripting.insertCSS({
            target: { tabId: tabId },
            css: setting.css,
          });
        } catch (err) {
          console.error(
            `YouHider failed to insert CSS for ${setting.key}:`,
            err,
          );
        }
      }
    }
  } finally {
    syncingTabs.delete(tabId);
  }
}

chrome.runtime.onMessage.addListener(async (message) => {
  if (message.action === "syncAllTabs") {
    const tabs = await chrome.tabs.query({ url: "*://*.youtube.com/*" });

    for (const tab of tabs) {
      syncCssForTab(tab.id);
    }
  }
});

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  syncCssForTab(details.tabId);
});

chrome.webNavigation.onCompleted.addListener((details) => {
  syncCssForTab(details.tabId);
});
