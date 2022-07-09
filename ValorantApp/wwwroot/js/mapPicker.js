// var maps = ["ascent", "icebox", "haven", "bind", "split"];

// Array of maps to pick from
var images = ["ascent.webp", "bind.webp", "haven.jpg", "icebox.png", "breeze_map.png", "split.webp"]

// Variable for number of shuffles you want to perform
var numberOfShuffles = Math.floor(Math.random() * 12);

// TimerID set to null. This is used as a variable for the interval which is used by the stop() function
let timerID = null;

// Variable for getting the rotator by ID
var rotator = document.getElementById('rotator');

// Unhides the map div
function ShowHideDiv() {
    document.getElementById('mapPicker').style.display = "block";
}

// Start() function starts the map rotation for picking
function start() {
    var imageDir = '/maps/';
    var delayInSeconds = 1;

    for (i = 0; i < numberOfShuffles; i++) {
        shuffle(images);
    };

    var num = 0;

    timerID = setInterval(function () {
            var len = images.length;
            rotator.src = imageDir + images[num++]
            if (num == len) {
                num = 0;
            }
    }, 801);

    setTimeout(stop, 5000);
};

// Stops the map rotations
function stop() {
    clearInterval(timerID);
}

// Shuffles an array. The maps will be shuffled before the map rotation begins
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    console.log(array);

    return array;
}