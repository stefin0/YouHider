const checkbox = document.getElementById('toggleView');

checkbox.addEventListener('change', async () => {
    if (checkbox.checked) {
        try {
            await browser.tabs.insertCSS({ file: "../hide.css" });
        } catch (error) {
            console.error("Error inserting CSS:", error);
        }
    } else {
        try {
            await browser.tabs.removeCSS({ file: "../hide.css" });
        } catch (error) {
            console.error("Error removing CSS:", error);
        }
    }
});
