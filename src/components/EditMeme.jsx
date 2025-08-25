
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Text from './Text'

function EditMeme() {
    const [params] =useSearchParams()
    console.log(params.get('url'))

    const[count,setCount]= useState(0)

    function addText(){
        setCount(count+1)
    }
  return (
    
    <div>
      <img src={params.get('url')} alt="" width={"250px"}/>
      {
        Array(count).fill(0).map((item)=>(
            <Text/>
        ))
      }
      <button className='border-0 p-2 bg-blue-600 text-white m-2 cursor-pointer' onClick={addText}>Add Text</button>
    </div>
  )
}

export default EditMeme
