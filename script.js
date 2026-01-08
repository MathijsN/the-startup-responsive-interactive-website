const reservationSetting = document.getElementById('reservation-settings');
const cancelationSetting = document.getElementById('cancelation-settings');
const reminderSetting = document.getElementById('reminder-settings');

reservationSetting.addEventListener("command", (e) => {
    if (e.command === "--toggle-settings") {
        reservationSetting.toggleAttribute('disabled')
    }
})
cancelationSetting.addEventListener("command", (e) => {
    if (e.command === "--toggle-settings") {
        cancelationSetting.toggleAttribute('disabled')
    }
})
reminderSetting.addEventListener("command", (e) => {
    if (e.command === "--toggle-settings") {
        reminderSetting.toggleAttribute('disabled')
    }
})