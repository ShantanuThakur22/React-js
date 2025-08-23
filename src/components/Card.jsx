import React, { useState } from 'react'
import { useWeather } from '../context/Context'

function Card() {
    const weather= useWeather()
  return (
    <div className='border-1 p-10 shadow-2xl text-center rounded-2xl '>
      <img src={weather?.data?.current?.condition?.icon} alt="" />
      <h2>
        {weather.data?.current?.temp_c}
      </h2>
      <h2>{weather.searchCity}</h2>
    </div>
  )
}

export default Card
