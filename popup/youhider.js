import { settings } from "../settings.js";

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
                try {
                    await browser.scripting.insertCSS({
                        target: { tabId: tab.id },
                        css: setting.css
                    });
                } catch (err) {
                    console.error(`failed to insert CSS: ${err}`);
                }
            } else {
                try {
                    await browser.scripting.removeCSS({
                        target: { tabId: tab.id },
                        css: setting.css
                    });
                } catch (err) {
                    console.error(`failed to remove CSS: ${err}`);
                }
            }
        });
    }
})();
