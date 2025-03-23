import { settings } from "./settings.js";

chrome.tabs.onUpdated.addListener(async (tabId) => {
    const stored = await chrome.storage.local.get(
        settings.map((s) => s.key)
    );

    for (const setting of settings) {
        if (stored[setting.key]) {
            try {
                await chrome.scripting.insertCSS({
                    target: { tabId: tabId },
                    css: setting.css
                });
            } catch (err) {
                console.error(`failed to insert CSS: ${err}`);
            }
        }
    }
});
