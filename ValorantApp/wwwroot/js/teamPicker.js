function ShowHideDiv() {
    var playersOnTeams = document.getElementById("playerOnTeams");
    var numberOfPlayers2v2 = document.getElementById("teamPicker2v2");
    var numberOfPlayers3v3 = document.getElementById("teamPicker3v3");
    var numberOfPlayers4v4 = document.getElementById("teamPicker4v4");
    var numberOfPlayers5v5 = document.getElementById("teamPicker5v5");

    //var numberOfPlayers2v2 = document.getElementById("teamPicker2v2");
    //var numberOfPlayers2v2 = document.getElementById("teamPicker2v2");
    numberOfPlayers2v2.style.display = playersOnTeams.value == "2v2" ? "block" : "none";
    numberOfPlayers3v3.style.display = playersOnTeams.value == "3v3" ? "block" : "none";
    numberOfPlayers4v4.style.display = playersOnTeams.value == "4v4" ? "block" : "none";
    numberOfPlayers5v5.style.display = playersOnTeams.value == "5v5" ? "block" : "none";
}

// Check if clear teams button is clicked
document.getElementById("clearTeams2v2").addEventListener("click", reload);
document.getElementById("clearTeams3v3").addEventListener("click", reload);
document.getElementById("clearTeams4v4").addEventListener("click", reload);
document.getElementById("clearTeams5v5").addEventListener("click", reload);

//function for reloading the page
function reload() {
    window.location.reload();
}

function ShowRandomTeams2v2() {
    document.getElementById("team12v2").style.display = "block";
    document.getElementById("vs2v2").style.display = "block";
    document.getElementById("team22v2").style.display = "block";
}

function ShowRandomTeams3v3() {
    document.getElementById("team13v3").style.display = "block";
    document.getElementById("vs3v3").style.display = "block";
    document.getElementById("team23v3").style.display = "block";
}

function ShowRandomTeams4v4() {
    document.getElementById("team14v4").style.display = "block";
    document.getElementById("vs4v4").style.display = "block";
    document.getElementById("team24v4").style.display = "block";
}

function ShowRandomTeams5v5() {
    document.getElementById("team15v5").style.display = "block";
    document.getElementById("vs5v5").style.display = "block";
    document.getElementById("team5v5").style.display = "block";
}

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

var players = []

function randomize2v2() {
    var inputs = document.getElementsByClassName("players2v2");

    for (var i = 0; i < inputs.length; ++i) {
        if (typeof inputs[i].value !== "undefined") {
            if (players.includes(inputs[i].value)) {
                console.log("Player " + inputs[i].value + " already in array");
            } else {
                console.log(inputs[i].value);
                players.push(inputs[i].value);
            }
        }
    }

    console.log(players);

    shuffle(players);

    console.log(players);
    console.log(players.length);

    document.getElementById("randomTeam12v2").innerHTML += players[0];
    document.getElementById("randomTeam12v2").innerHTML += "<br />";
    document.getElementById("randomTeam12v2").innerHTML += "<br />";
    document.getElementById("randomTeam12v2").innerHTML += players[1];

    document.getElementById("randomTeam22v2").innerHTML += players[2];
    document.getElementById("randomTeam22v2").innerHTML += "<br />";
    document.getElementById("randomTeam22v2").innerHTML += "<br />";
    document.getElementById("randomTeam22v2").innerHTML += players[3];

    players = []

    console.log(players);
}

function randomize3v3() {
    var inputs = document.getElementsByClassName("players3v3");

    for (var i = 0; i < inputs.length; ++i) {
        if (typeof inputs[i].value !== "undefined") {
            if (players.includes(inputs[i].value)) {
                console.log("Player " + inputs[i].value + " already in array");
            } else {
                console.log(inputs[i].value);
                players.push(inputs[i].value);
            }
        }
    }

    console.log(players);

    shuffle(players);

    console.log(players);
    console.log(players.length);

    document.getElementById("randomTeam13v3").innerHTML += players[0];
    document.getElementById("randomTeam13v3").innerHTML += "<br />";
    document.getElementById("randomTeam13v3").innerHTML += "<br />";
    document.getElementById("randomTeam13v3").innerHTML += players[1];
    document.getElementById("randomTeam13v3").innerHTML += "<br />";
    document.getElementById("randomTeam13v3").innerHTML += "<br />";
    document.getElementById("randomTeam13v3").innerHTML += players[2];

    document.getElementById("randomTeam23v3").innerHTML += players[3];
    document.getElementById("randomTeam23v3").innerHTML += "<br />";
    document.getElementById("randomTeam23v3").innerHTML += "<br />";
    document.getElementById("randomTeam23v3").innerHTML += players[4];
    document.getElementById("randomTeam23v3").innerHTML += "<br />";
    document.getElementById("randomTeam23v3").innerHTML += "<br />";
    document.getElementById("randomTeam23v3").innerHTML += players[5];

    players = []
}

function randomize4v4() {
    var inputs = document.getElementsByClassName("players4v4");

    for (var i = 0; i < inputs.length; ++i) {
        if (typeof inputs[i].value !== "undefined") {
            if (players.includes(inputs[i].value)) {
                console.log("Player " + inputs[i].value + " already in array");
            } else {
                console.log(inputs[i].value);
                players.push(inputs[i].value);
            }
        }
    }

    console.log(players);

    shuffle(players);

    console.log(players);
    console.log(players.length);

    document.getElementById("randomTeam14v4").innerHTML += players[0];
    document.getElementById("randomTeam14v4").innerHTML += "<br />";
    document.getElementById("randomTeam14v4").innerHTML += "<br />";
    document.getElementById("randomTeam14v4").innerHTML += players[1];
    document.getElementById("randomTeam14v4").innerHTML += "<br />";
    document.getElementById("randomTeam14v4").innerHTML += "<br />";
    document.getElementById("randomTeam14v4").innerHTML += players[2];
    document.getElementById("randomTeam14v4").innerHTML += "<br />";
    document.getElementById("randomTeam14v4").innerHTML += "<br />";
    document.getElementById("randomTeam14v4").innerHTML += players[3];

    document.getElementById("randomTeam24v4").innerHTML += players[4];
    document.getElementById("randomTeam24v4").innerHTML += "<br />";
    document.getElementById("randomTeam24v4").innerHTML += "<br />";
    document.getElementById("randomTeam24v4").innerHTML += players[5];
    document.getElementById("randomTeam24v4").innerHTML += "<br />";
    document.getElementById("randomTeam24v4").innerHTML += "<br />";
    document.getElementById("randomTeam24v4").innerHTML += players[6];
    document.getElementById("randomTeam24v4").innerHTML += "<br />";
    document.getElementById("randomTeam24v4").innerHTML += "<br />";
    document.getElementById("randomTeam24v4").innerHTML += players[7];
    players = []
}

function randomize5v5() {
    var inputs = document.getElementsByClassName("players5v5");

    for (var i = 0; i < inputs.length; ++i) {
        if (typeof inputs[i].value !== "undefined") {
            if (players.includes(inputs[i].value)) {
                console.log("Player " + inputs[i].value + " already in array");
            } else {
                console.log(inputs[i].value);
                players.push(inputs[i].value);
            }
        }
    }

    console.log(players);

    shuffle(players);

    console.log(players);
    console.log(players.length);

    document.getElementById("randomTeam15v5").innerHTML += players[0];
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += players[1];
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += players[2];
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += players[3];
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += players[4];

    document.getElementById("randomTeam15v5").innerHTML += players[5];
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += players[6];
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += players[7];
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += players[8];
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += "<br />";
    document.getElementById("randomTeam15v5").innerHTML += players[9];

    players = []
}

// document.getElementById("playerSubmit2v2").addEventListener("click", randomize());