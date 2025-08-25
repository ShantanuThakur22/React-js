import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import EditMeme from './components/EditMeme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Meme Generator</h1>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/edit' element={<EditMeme/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
