  let baseURL= 'https://api.weatherapi.com/v1/current.json?key=42a5e3a9c5574536a02130105250308'

  export default async function getWeatherData(city) {
    let response= await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
  }

 