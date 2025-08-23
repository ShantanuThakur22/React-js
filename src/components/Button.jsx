import React from 'react'
import { useWeather } from '../context/Context'

function Button({value}) {

    let search= useWeather()
    
  return (
    <div>
      <button className='border-1 rounded-xl p-2 cursor-pointer' onClick={search.fetchData} >{value}</button>
    </div>
  )
}

export default Button
