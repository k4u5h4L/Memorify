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

for (let i1 = 0; i1 < document.querySelectorAll("img").length; i1++) {
    document.querySelectorAll("img")[i1].addEventListener("click", function () {
        loadImage(i1);
    });
}

function loadImage(index) {
    console.log(index);
    let card1 = document.querySelectorAll("img")[index];
    card1.setAttribute("src", cardArray[index].img);
    cardArray[index].open = true;

    checkImage(index);
}

function checkImage(index) {
    //console.log("Picked " + index);
    let temp = 0;
    let tempArray = [];
    for (let i = 0; i < cardArray.length; i++) {
        if (cardArray[i].open == true) {
            tempArray[temp++] = i;
            console.log(tempArray.length);
        }
    }
}
