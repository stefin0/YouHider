let styleElement = null;
let lastAppliedCss = "";

function updateStyles(css) {
  lastAppliedCss = css;

  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = "youhider-styles";

    const observer = new MutationObserver(() => {
      if (document.head) {
        document.head.appendChild(styleElement);
        observer.disconnect();
      }
    });

    observer.observe(document.documentElement, { childList: true });
  }

  styleElement.textContent = css;
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "updateCss") {
    updateStyles(message.css);
  }
});

chrome.runtime.sendMessage({ action: "getInitialCss" }, (response) => {
  updateStyles(response?.css || "");
});

document.addEventListener("yt-navigate-finish", () => {
  if (styleElement && !document.head.contains(styleElement)) {
    document.head.appendChild(styleElement);
  }

  if (styleElement) {
    styleElement.textContent = lastAppliedCss;
  }
});
