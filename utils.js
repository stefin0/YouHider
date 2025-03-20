export async function insertCSSHelper(tabId, css) {
    try {
        await browser.scripting.insertCSS({
            target: { tabId },
            css
        });
    } catch (err) {
        console.error(`failed to insert CSS: ${err}`);
    }
}

export async function removeCSSHelper(tabId, css) {
    try {
        await browser.scripting.removeCSS({
            target: { tabId },
            css
        });
    } catch (err) {
        console.error(`failed to remove CSS: ${err}`);
    }
}
