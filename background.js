import { settings } from "./settings.js";

browser.tabs.onUpdated.addListener(async (tabId) => {
    const stored = await browser.storage.local.get(
        settings.map((s) => s.key)
    );

    for (const setting of settings) {
        if (stored[setting.key]) {
            try {
                await browser.scripting.insertCSS({
                    target: { tabId: tabId },
                    css: setting.css
                });
            } catch (err) {
                console.error(`failed to insert CSS: ${err}`);
            }
        }
    }
});
