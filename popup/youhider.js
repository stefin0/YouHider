import { settings } from "../settings.js";
import { insertCSSHelper, removeCSSHelper } from "../utils.js";

(async () => {
    const stored = await browser.storage.local.get(
        settings.map((s) => s.key)
    );

    for (const setting of settings) {
        const checkbox = document.getElementById(setting.checkboxId);
        checkbox.checked = !!stored[setting.key];

        checkbox.addEventListener("change", async function() {
            const state = this.checked;
            await browser.storage.local.set({ [setting.key]: state });
            const [tab] = await browser.tabs.query({ active: true, currentWindow: true });

            if (state) {
                await insertCSSHelper(tab.id, setting.css);
            } else {
                await removeCSSHelper(tab.id, setting.css);
            }
        });
    }
})();
