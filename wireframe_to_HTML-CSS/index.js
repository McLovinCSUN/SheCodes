//get the current date, day and time
let today = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[today.getDay()];

document.querySelector("#datetime").innerHTML =
  ("0" + (today.getMonth() + 1)).slice(-2) +
  "/" +
  ("0" + today.getDate()).slice(-2) +
  "/" +
  today.getFullYear() +
  " " +
  "<br />" +
  day +
  "<br />" +
  ("0" + today.getHours()).slice(-2) +
  ":" +
  ("0" + today.getMinutes()).slice(-2);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form");
  let searchInputToLower = searchInput.value
    .toLowerCase()
    .replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    });
  if (searchInputToLower) {
    updateCity.innerHTML = searchInputToLower;
  } else {
    updateCity.innerHTML = `Please type a city...`;
  }
}

function changeTemp(event) {
  event.preventDefault();
  tempC.innerHTML = "28.3 ℃";
}

let updateCity = document.querySelector("#currentCity");
let form = document.querySelector("#search-bar");
form.addEventListener("submit", search);

let tempC = document.querySelector("#temp");
tempC.addEventListener("click", changeTemp);
