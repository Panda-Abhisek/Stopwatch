var stopwatches = {
    1: {
        timer: null,
        time: 0
    },
    2: {
        timer: null,
        time: 0
    }
};

function updateStopwatch(stopwatchId) {
    var stopwatch = document.getElementById('stopwatch' + stopwatchId);
    var time = stopwatches[stopwatchId].time;
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor((time % 3600) / 60);
    var seconds = time % 60;
    stopwatch.innerHTML = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

function pad(value) {
    return String(value).padStart(2, '0');
}

function startStopwatch(stopwatchId) {
    if (!stopwatches[stopwatchId].timer) {
        stopwatches[stopwatchId].timer = setInterval(function () {
            stopwatches[stopwatchId].time++;
            updateStopwatch(stopwatchId);
        }, 1000);
    }
}

function stopStopwatch(stopwatchId) {
    if (stopwatches[stopwatchId].timer) {
        clearInterval(stopwatches[stopwatchId].timer);
        stopwatches[stopwatchId].timer = null;
    }
}

function resetStopwatch(stopwatchId) {
    stopwatches[stopwatchId].time = 0;
    updateStopwatch(stopwatchId);
}