// timer.js

let secs = 60;
//let mins = 1;
let myVar = setInterval(myTimer, 1000);
let strVal;
let pauseVal = false;

function myTimer() {
    if (!pauseVal) {
        strVal = secs + "s";
        document.getElementById("time").innerHTML = strVal;
        secs--;

        if (secs == 0) {
            alert("Time Up!");
            location.reload();
        }
    }
}
