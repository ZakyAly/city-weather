const apiKey = "ee0b714289656e8350680d4bdd7bc477";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=aswan";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
  document.querySelector(".humidity").innerHTML = Math.round(
    data.main.humidity
  );
  document.querySelector(".wind").innerHTML = Math.round(data.wind.speed);
}

checkWeather();
