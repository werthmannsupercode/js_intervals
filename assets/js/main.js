// Lev1_1
// console.log('%cLev1_1', 'color: green');

// console.log("Beim Start der Seite direkt")

// function dasDauert() {
//     console.log("Nach 5 Sekunden");
// }

// setTimeout(dasDauert, 5000);

// let stopInterval = document.querySelector(".stopInterval");

// let time = () => {
//     let a = new Date();
//     console.log(a.toLocaleTimeString());
// }

// let startInterval = setInterval(time, 5000);

// stopInterval.addEventListener("click", () => {
//     clearInterval(startInterval);
//     console.log("Interval gestoppt");
// })
// let b = 10;
// console.log(b);

// function runterzaehlen() {
//     b--;

//     if (b > 0) {
//         console.log(b);
//     }

//     else if (b == 0) {
//         console.log("Feierabend")
//         clearInterval(startZaehlen);
//     }
// }
// let startZaehlen = setInterval(runterzaehlen, 1000);

// Lev1_2
console.log('%cLev1_2', 'color: green');

let btn = document.getElementById('btn');
let zeit = document.querySelector(".zeit");
let d = 100;
zeit.innerHTML = d + "%";

let countDownProzent = () => {
    d--
    if (d >= 0) {
        zeit.innerHTML = d + "%";
    }
    else if (d == -1) {
        clearInterval(startCountDown);
    }
}

btn.addEventListener('click', () => {
    let startCountDown = setInterval(countDownProzent, 100);
})

// Lev2_1
console.log('%cLev2_1', 'color: green');

let message = document.querySelector('.message');
let count = document.getElementById('count');
let e = 10;



function fensterWeg() {
    e--;
    if (e > 0) {
        count.innerHTML = e;
    }

    else if (e == 0) {
        clearInterval();
        message.style.display = 'none';
    }
}


setInterval(fensterWeg, 1000);

// Lev2_4
console.log('%cLev2_4', 'color: green');

let dateA = new Date();

let tag = document.getElementById("tag");
let stunden = document.getElementById("stunden");
let minuten = document.getElementById("minuten");
let sekunden = document.getElementById("sekunden");
let dateInput = document.getElementById("dateInput");

dateInput.addEventListener("change", () => {
    let dateB = dateInput.value;
    console.log(dateB);
    let dateBYear = Number(dateB.slice(0, 4));
    console.log(dateBYear);
    let dateBMonth = Number(dateB.slice(5, 7));
    console.log(dateBMonth);
    let dateBDay = Number(dateB.slice(8, 10));
    console.log(dateBDay);

    let inputDate = new Date();
    inputDate.setDate(dateBDay);
    inputDate.setFullYear(dateBYear);
    inputDate.setMonth(dateBMonth - 1);
    inputDate.setHours(0);
    inputDate.setMinutes(0);
    inputDate.setSeconds(0);
    console.log(inputDate); //Enddatum, von dem aus wir runterzählen;

    let x = setInterval(function () {
        // Get todays date and time
        let now = new Date().getTime();
        // Find the distance between now an the count down date
        let distance = inputDate - now;
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Output the result in elements with id="cdHour/cdMin/cdSec"
        tag.innerHTML = ("0" + days).slice(-2);
        stunden.innerHTML = ("0" + hours).slice(-2);
        minuten.innerHTML = ("0" + minutes).slice(-2);
        sekunden.innerHTML = ("0" + seconds).slice(-2);
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countContainer").innerHTML = "EXPIRED";
        }
    }, 1000);
})