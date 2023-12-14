//const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.16'; //53 -latitude , 0.16 longitude
//const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=19.07%2C72.8'; //Mumbai(Bombay)
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '591ae20b7dmshb922ad5a8287967p139a06jsn777678f347ab',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
    cityName.innerHTML=city
//fetch(url,options)
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options) //to search weather for different cities
.then(response => response.json())
.then((response) => { 
    console.log(response)
//define parameters of api
    cloud_pct.innerHTML=response.cloud_pct  //name.innerHTML=response.id
    temp.innerHTML=response.temp
    temp2.innerHTML=response.temp
    feels_like.innerHTML=response.feels_like
    min_temp.innerHTML=response.min_temp
    max_temp.innerHTML=response.max_temp
    wind_speed.innerHTML=response.wind_speed
    wind_speed2.innerHTML=response.wind_speed
    wind_degrees.innerHTML=response.wind_degrees
    sunrise.innerHTML=response.sunrise
    sunset.innerHTML=response.sunset
    humidity.innerHTML=response.humidity
    humidity2.innerHTML=response.humidity
    
})
.catch(err => console.error(err));
}

//NOTE : In Rapidapi client request, add in Query Param(q)-value(lat,lon)
submit.addEventListener("click",(e)=>{
    e.preventDefault() //to not reload again after entering city name(imp.)
    getWeather(city.value)
    
})
getWeather("Delhi") //calling func.
//convert timestamp to time format

//Date & Time
/*var timestamp=Date.now()/1000;
//document.write(timestamp);
//console.log(timestamp);
var time=new Date(timestamp*1000);
document.write(time.toLocaleString({timeZone:'city'}));//format
console.log(time.toLocaleString());
if(time.getHours>=12 && time.getHours<=16){
    document.write("Good Afternoon!");
}*/

// Mock data
const data = { sys: { sunrise: 1686819713693 } };

// Grab the sunrise timestamp
const { sunrise } = data.sys;

// Set the locale
const locale = 'en-GB';

function getFormattedTime(timestamp, locale) {
  
  // Create a date from the timestamp
  const date = new Date(timestamp);

  // Restrict the formatting to hour & minute
  const options = { hour: 'numeric', minute: 'numeric' };

  // Return appropriately formatted time
  return new Intl.DateTimeFormat(locale, options).format(date);

}

// Select the element
const sunriseEl = document.querySelector('.sunrise');

// Using a template string add the sunrise variable as
// text content to the element
sunriseEl.textContent = `Sonnenaufgang: ${getFormattedTime(sunrise, locale)}`;
//<p class="sunrise"></p>