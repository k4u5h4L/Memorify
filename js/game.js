// game.js

let cardArray = [
    {
        name: "cpp",
        img: "images/c++.png",
    },
    {
        name: "cpp",
        img: "images/c++.png",
    },
    {
        name: "python",
        img: "images/python.png",
    },
    {
        name: "python",
        img: "images/python.png",
    },
    {
        name: "c",
        img: "images/c.png",
    },
    {
        name: "c",
        img: "images/c.png",
    },
    {
        name: "js",
        img: "images/js.png",
    },
    {
        name: "js",
        img: "images/js.png",
    },
    {
        name: "flutter",
        img: "images/flutter.png",
    },
    {
        name: "flutter",
        img: "images/flutter.png",
    },
    {
        name: "tux",
        img: "images/tux.png",
    },
    {
        name: "tux",
        img: "images/tux.png",
    },
];

cardArray.sort(() => 0.5 - Math.random());

for (let i = 0; i < document.querySelectorAll("img").length; i++) {
    document.querySelectorAll("img")[i].addEventListener("click", function () {
        //console.log(event);
        loadImage(i);
        //alert("Hello there");
    });
}

function loadImage(index) {
    console.log(index);
    let card1 = document.querySelectorAll("img")[index];
    card1.setAttribute("src", cardArray[index].img);
}
