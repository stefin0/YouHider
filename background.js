import { settings } from "./settings.js";
import { insertCSSHelper } from "./utils.js";

browser.tabs.onUpdated.addListener(async (tabId) => {
    const stored = await browser.storage.local.get(
        settings.map((s) => s.key)
    );

    for (const setting of settings) {
        if (stored[setting.key]) {
            await insertCSSHelper(tabId, setting.css);
        }
    }
});
