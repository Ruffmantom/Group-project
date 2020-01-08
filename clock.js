//Clock//
const clock = document.getElementById('clock');

function updateTime() {
    const now = moment();
    const humanReadable = now.format('MMMM Do YYYY, h:mm a');

    clock.textContent = humanReadable;
}

setInterval(updateTime, 1000);
updateTime();