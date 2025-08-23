import React from 'react'
import { useWeather } from '../context/Context'

function Input() {
    const weather= useWeather()
    console.log(weather)
  return (
    <div >
    
      <input type="text" placeholder='' className='border-1 rounded-2xl text-2xl p-3 ' value={weather.searchCity} onChange={(e)=>{weather.setSearchCity(e.target.value)}}/>
    </div>
  )
}

export default Input
