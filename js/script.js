console.log("Witam Cię w moim świecie. Pozdrawiam! Rafał Pietrzyk.");

let button = document.querySelector(".js-button");

let buttonText = document.querySelector(".js-button__text");

let picture = document.querySelector(".js-picture");

button.addEventListener("click", () => {
    if (buttonText.innerText === "ukryj") {
        picture.style.display = "none";
        buttonText.innerText = "pokaż";
    } else {
        picture.style.display = "block";
        buttonText.innerText = "ukryj";
    }
});

let day = document.querySelector(".js-date__day");
let now = new Date();

let days = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota"
];

let dayOfTheWeekNow = days[now.getDay()];

day.innerText = dayOfTheWeekNow;
daysToTheWeekend = document.querySelector(".js-date__daysToTheWeekend");

switch (dayOfTheWeekNow) {
    case "Poniedziałek":
        daysToTheWeekend.innerText = 5;
        break;
    case "Wtorek":
        daysToTheWeekend.innerText = 4;
        break;
    case "Środa":
        daysToTheWeekend.innerText = 3;
        break;
    case "Czwartek":
        daysToTheWeekend.innerText = 2;
        break;
    case "Piątek":
        daysToTheWeekend.innerText = 1;
        break;
    default:
        daysToTheWeekend.innerText = 0;
}
