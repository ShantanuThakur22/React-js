import { createContext, useContext, useState } from "react";
import getWeatherData from "../components/api";

export const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [searchCity,setSearchCity]= useState(null)

  const fetchData= async ()=>{
    let result= await getWeatherData(searchCity) 
    setData(result)
    
  }

  
  return( <WeatherContext value={{data,setData,searchCity,setSearchCity,fetchData}}>
    {children}
     </WeatherContext>)
};
