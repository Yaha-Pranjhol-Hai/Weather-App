

const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(`http://localhost:3000/weather?city=${city}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      console.log("Data is here");
		document.getElementById("temp").innerHTML = response.temp;
		document.getElementById("feels_like").innerHTML = response.feels_like;
    document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
		document.getElementById("humidity").innerHTML = response.humidity;
		document.getElementById("min_temp").innerHTML = response.min_temp;
		document.getElementById("max_temp").innerHTML = response.max_temp;
		document.getElementById("wind_speed").innerHTML = response.wind_speed;
		document.getElementById("sunrise").innerHTML = format_time(response.sunrise);
		document.getElementById("sunset").innerHTML = format_time(response.sunset);
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

document.addEventListener("DOMContentLoaded", () => {
  getWeather("Bhilwara");
});

function format_time(s) {
  return new Date(s * 1e3).toISOString().slice(-13, -5);
}
