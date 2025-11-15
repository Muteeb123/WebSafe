async function scanURL(url) {
    console.log("Sending URL to backend:", url);
    try {
        const response = await fetch("http://127.0.0.1:8000/scan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url })
        });
        const data = await response.json();
        console.log("Scan result:", data);

    } catch (error) {
        console.error("Fetch error:", error);
    }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log("Tab updated:", tabId, changeInfo.status, tab.url);


    if (
        changeInfo.status === "complete" &&
        tab.url?.startsWith("http") &&
        !tab.url.startsWith("chrome://") &&
        !tab.url.startsWith("chrome-extension://")
    ) {
        scanURL(tab.url);
    }
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    console.log("Tab activated:", tab.id, tab.url);

    if (
        tab.url?.startsWith("http") &&
        !tab.url.startsWith("chrome://") &&
        !tab.url.startsWith("chrome-extension://")
    ) {
        scanURL(tab.url);
    }
});
