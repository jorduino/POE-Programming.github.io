// prevent screen from sleeping
let wakeLock = null;
const requestWakeLock = async () => {
    try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => {
            console.log('Wake Lock was released');
        });
        console.log('Wake Lock is active');
    } catch (err) {
        console.error(`${err.name}, ${err.message}`);
    }
};
requestWakeLock();

// page urls
const pages = [
    {
        id: "crt",
        url: "http://modelt/mt3/?163&nt=radamo",
        time: 12000
    }, {
        id: "detailed",
        url: "http://modelt/mt3/?191&nt=radamo&site=WIC",
        time: 12000
    }, {
        id: "texnation",
        url: "http://modelt/mt3/?158",
        time: 1000
    }, {
        id: "bubbles",
        url: "http://modelt/mt3/?154&site=WIC",
        time: 2000
    }
];

// keep track of which page is showing
let currentPage = 0;

// how many frames since page started
let frames = 0;

// date in millis since page update
let startDate = new Date().getTime();

// 
let loopTime = 0;


function changeView() {

    for (let i = 0; i < pages.length; i++) {

        pages[i].element.classList.add('hide');

    }

    pages[currentPage].element.classList.remove('hide');

    currentPage = (currentPage + 1) % pages.length;

}

function loop() {
    window.frames++;
    let oldTime = loopTime;
    loopLength = pages[currentPage].time
    loopTime = (new Date().getTime() - startDate) % loopLength;
    if (loopTime < oldTime) {
        startDate = new Date().getTime();
        changeView();
        resetProgress();
    }
    setProgress(loopTime / loopLength);
}

function resetProgress() {
    loopProgress.value = 0;
}

function setProgress(x) {
    loopProgress.value = x;
}
window.onload = () => {
    for (let i = 0; i < pages.length; i++) {
        pages[i].element = document.createElement("iframe");
        pages[i].element.src = pages[i].url;
        document.body.prepend(pages[i].element);
    }
    window.setInterval(loop, 10);

}