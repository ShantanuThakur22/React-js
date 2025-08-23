import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Card from './components/Card'
import Button from './components/Button'
import { WeatherProvider } from './context/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <WeatherProvider>
    <div className='flex flex-col justify-center gap-2 items-center m-auto p-10'>
      <Input />
      <Button value='search '/>
      <Card/>
      <Button value= 'Refresh'/>
      
    </div>
    </WeatherProvider>
  )
}

export default App
