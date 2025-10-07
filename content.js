let styleElement = null;
let lastAppliedCss = "";

function updateStyles(css) {
  lastAppliedCss = css;

  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = "youhider-styles";
  }

  styleElement.textContent = css;

  if (!document.head.contains(styleElement)) {
    const append = () => document.head?.appendChild(styleElement);

    if (document.head) {
      append();
    } else {
      const observer = new MutationObserver(() => {
        if (document.head) {
          append();
          observer.disconnect();
        }
      });
      observer.observe(document.documentElement, { childList: true });
    }
  }
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
