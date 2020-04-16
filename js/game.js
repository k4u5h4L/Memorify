// game.js
for (let i = 0; i < document.querySelectorAll("img").length; i++) {
    document.querySelectorAll("img")[i].addEventListener("click", function () {
        //console.log(event);
        loadImage(i);
        //alert("Hello there");
    });
}

function loadImage(index) {
    console.log(index);
}
