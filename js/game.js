// game.js
let turnOfPlayers = "p1";
// false = player1's turn, true = player2's turn

turnOfPlayers = localStorage.getItem("turn");

if (turnOfPlayers == "p2") {
    document.getElementById("turn").innerHTML = "Player 2.";
} else {
    document.getElementById("turn").innerHTML = "Player 1.";
}

let cardArray = [
    {
        name: "cpp",
        img: "images/c++.png",
        open: false,
    },
    {
        name: "cpp",
        img: "images/c++.png",
        open: false,
    },
    {
        name: "python",
        img: "images/python.png",
        open: false,
    },
    {
        name: "python",
        img: "images/python.png",
        open: false,
    },
    {
        name: "c",
        img: "images/c.png",
        open: false,
    },
    {
        name: "c",
        img: "images/c.png",
        open: false,
    },
    {
        name: "js",
        img: "images/js.png",
        open: false,
    },
    {
        name: "js",
        img: "images/js.png",
        open: false,
    },
    {
        name: "flutter",
        img: "images/flutter.png",
        open: false,
    },
    {
        name: "flutter",
        img: "images/flutter.png",
        open: false,
    },
    {
        name: "tux",
        img: "images/tux.png",
        open: false,
    },
    {
        name: "tux",
        img: "images/tux.png",
        open: false,
    },
];

// this function jumbles the tiles
cardArray.sort(() => 0.5 - Math.random());

let remember = [];

let p1Score = 0;
let p2Score = 0;

p1Score = localStorage.getItem("player1Score");

if (p1Score == null) {
    document.getElementById("player1").innerHTML = 0;
} else {
    document.getElementById("player1").innerHTML = p1Score;
}

p2Score = localStorage.getItem("player2Score");

if (p2Score == null) {
    document.getElementById("player2").innerHTML = 0;
} else {
    document.getElementById("player2").innerHTML = p2Score;
}

if (p1Score > p2Score) {
    document.getElementById("winner").innerHTML = "Player 1";
} else if (p1Score < p2Score) {
    document.getElementById("winner").innerHTML = "Player 2";
} else {
    document.getElementById("winner").innerHTML = "Draw";
}

//localStorage.setItem("player1Score", p1Score);
//localStorage.setItem("player2Score", p2Score);

let score = 0;
//document.getElementById("result").innerHTML = score;

let cardNumbers = [];

for (let i1 = 0; i1 < document.querySelectorAll("img").length; i1++) {
    document.querySelectorAll("img")[i1].addEventListener("click", function () {
        if (cardArray[i1].open == false) {
            remember.push(i1);
            loadImage(i1);
        }
    });
}

function loadImage(index) {
    //console.log(index);
    let card1 = document.querySelectorAll("img")[index];
    card1.setAttribute("src", cardArray[index].img);
    cardArray[index].open = true;

    checkImage(index);
}

function checkImage(index) {
    /*
    if (cardArray[remember[0]].img == cardArray[remember[1]].img) {
        alert("Match");
    }*/

    if (remember.length == 2) {
        if (cardArray[remember[0]].img == cardArray[remember[1]].img) {
            setTimeout(match, 250);
        } else {
            setTimeout(noMatch, 250);
        }
    }
}

function noMatch() {
    alert("Try again");
    document.querySelectorAll("img")[remember[0]].setAttribute("src", "images/blank.png");
    document.querySelectorAll("img")[remember[1]].setAttribute("src", "images/blank.png");

    cardArray[remember[0]].open = false;
    cardArray[remember[1]].open = false;

    remember.length = 0;
}

let p1Time = 0;
let p2Time = 0;

function match() {
    alert("Match!");
    document.querySelectorAll("img")[remember[0]].setAttribute("src", "images/white.png");
    document.querySelectorAll("img")[remember[1]].setAttribute("src", "images/white.png");

    score++;
    //document.getElementById("result").innerHTML = score;

    if (score % 6 == 0) {
        pauseVal = true;

        if (turnOfPlayers == "p2") {
            p2Time = secs;
            //p2Score++;
            //localStorage.setItem("p2Time", secs);
            //calculateTime();

            localStorage.setItem("player2Score", p2Score);
            localStorage.setItem("turn", "p1");
        } else {
            p1Score++;
            //p1Time = secs;
            //localStorage.setItem("p1Time", secs);
            //calculateTime();

            localStorage.setItem("player1Score", p1Score);
            localStorage.setItem("turn", "p2");
        }

        alert("Congratulations! You have completed the round!!");
        location.reload();
    }

    remember.length = 0;
}

function calculateTime() {
    if (localStorage.getItem("p2Time") < localStorage.getItem("p1Time")) {
        p2Score++;
    } else if (localStorage.getItem("p2Time") > localStorage.getItem("p1Time")) {
        p1Score++;
    } else {
        alert("Both have completed in equal amounts of time. How rare!");
    }
}
