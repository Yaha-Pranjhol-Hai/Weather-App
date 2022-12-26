const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6615cbb670msh620beb676e3ce16p1d94f1jsnb4c4d062e007",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city)=>{
	cityName.innerHTML= city
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,options)
    .then((response) => response.json())
    .then((response) => {

	console.log(response);  
	cloud_pct.innerHTML = response.cloud_pct
	temp.innerHTML = response.temp
	temp2.innerHTML = response.temp
	feels_like.innerHTML = response.feels_like
	humidity.innerHTML = response.humidity
	humidity2.innerHTML = response.humidity
	min_temp.innerHTML = response.min_temp
	max_temp.innerHTML = response.max_temp
	wind_speed.innerHTML = response.wind_speed
	wind_speed2.innerHTML = response.wind_speed
	sunrise.innerHTML = format_time(response.sunrise)
	sunset.innerHTML = format_time(response.sunset)
})
    .catch((err) => console.error(err));
}

const getWeatherOfShanghai=()=> {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai",options)
    .then((response) => response.json())
    .then((response) => {

	console.log(response);  
	Scloud_pct.innerHTML = response.cloud_pct
	Stemp.innerHTML = response.temp
	Sfeels_like.innerHTML = response.feels_like
	Shumidity.innerHTML = response.humidity
	Smin_temp.innerHTML = response.min_temp
	Smax_temp.innerHTML = response.max_temp
	Swind_degrees.innerHTML = response.wind_degrees
	Swind_speed.innerHTML = response.wind_speed
	Ssunrise.innerHTML = format_time(response.sunrise)
	Ssunset.innerHTML = format_time(response.sunset)
})
    .catch((err) => console.error(err));
}

const getWeatherOfBoston=()=> {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston",options)
    .then((response) => response.json())
    .then((response) => {

	console.log(response);  
	Bcloud_pct.innerHTML = response.cloud_pct
	Btemp.innerHTML = response.temp
	Bfeels_like.innerHTML = response.feels_like
	Bhumidity.innerHTML = response.humidity
	Bmin_temp.innerHTML = response.min_temp
	Bmax_temp.innerHTML = response.max_temp
	Bwind_degrees.innerHTML = response.wind_degrees
	Bwind_speed.innerHTML = response.wind_speed
	Bsunrise.innerHTML = format_time(response.sunrise)
	Bsunset.innerHTML = format_time(response.sunset)
})
    .catch((err) => console.error(err));
}

const getWeatherOfLucknow=()=> {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",options)
    .then((response) => response.json())
    .then((response) => {

	console.log(response);  
	Lcloud_pct.innerHTML = response.cloud_pct
	Ltemp.innerHTML = response.temp
	Lfeels_like.innerHTML = response.feels_like
	Lhumidity.innerHTML = response.humidity
	Lmin_temp.innerHTML = response.min_temp
	Lmax_temp.innerHTML = response.max_temp
	Lwind_degrees.innerHTML = response.wind_degrees
	Lwind_speed.innerHTML = response.wind_speed
	Lsunrise.innerHTML = format_time(response.sunrise)
	Lsunset.innerHTML = format_time(response.sunset)
})
    .catch((err) => console.error(err));
}

const getWeatherOfKolkata=()=> {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",options)
    .then((response) => response.json())
    .then((response) => {

	console.log(response);  
	Kcloud_pct.innerHTML = response.cloud_pct
	Ktemp.innerHTML = response.temp
	Kfeels_like.innerHTML = response.feels_like
	Khumidity.innerHTML = response.humidity
	Kmin_temp.innerHTML = response.min_temp
	Kmax_temp.innerHTML = response.max_temp
	Kwind_degrees.innerHTML = response.wind_degrees
	Kwind_speed.innerHTML = response.wind_speed
	Ksunrise.innerHTML = format_time(response.sunrise)
	Ksunset.innerHTML = format_time(response.sunset)
})
    .catch((err) => console.error(err));
}



submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeatherOfKolkata()
getWeatherOfLucknow()
getWeatherOfBoston()
getWeatherOfShanghai()
getWeather("Delhi")

var date = new Date(response.sunrise * 1000);

function format_time(s) {
	return new Date(s * 1e3).toISOString().slice(-13,-5);
}

console.log( format_time(12345));