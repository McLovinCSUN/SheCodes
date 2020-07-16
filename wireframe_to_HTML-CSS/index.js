let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city");
if (city === null || !city.match(/[a-z]/i)) {
  city = prompt(
    "You did not enter a proper city name. Please enter a city name."
  );
  if (city === null || !city.match(/[a-z]/i)) {
    alert("Error! Page will reload for you to try again.");
    location.reload(true);
  }
} else {
  city = city.toLowerCase();
}

if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try to go to https://www.google.com/search?q=weather+${city}`
  );
}
