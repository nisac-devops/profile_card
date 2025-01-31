function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('currentTimeUTC').innerText = utcTime;
}
updateTime();