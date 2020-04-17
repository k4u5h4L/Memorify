// game.js

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

function match() {
    alert("Match!");
    document.querySelectorAll("img")[remember[0]].setAttribute("src", "images/white.png");
    document.querySelectorAll("img")[remember[1]].setAttribute("src", "images/white.png");

    score++;
    //document.getElementById("result").innerHTML = score;

    remember.length = 0;

    if (score == 6) {
        alert("Congratulations! You have completed the round!!");
        location.reload();
    }
}
