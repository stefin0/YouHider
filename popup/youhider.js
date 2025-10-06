import { settings } from "../settings.js";

(async () => {
  const stored = await chrome.storage.local.get(
    settings.map((setting) => setting.key),
  );

  for (const setting of settings) {
    const checkbox = document.getElementById(setting.checkboxId);

    checkbox.checked = !!stored[setting.key];

    checkbox.addEventListener("change", async function () {
      const state = this.checked;

      await chrome.storage.local.set({ [setting.key]: state });

      chrome.runtime.sendMessage({ action: "syncAllTabs" });
    });
  }
})();
