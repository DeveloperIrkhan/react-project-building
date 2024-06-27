import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")
  return (
    <div className='w-full h-screen duration-700' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-3 py-1'>
        <div className="flex flex-wrap justify-center bg-white shadow-lg p-1 rounded-xl gap-1">
          <button onClick={()=>{setColor("green")}} 
          className='outline-none py-2 px-3 rounded-full' style={{ backgroundColor: "green", color: "white" }}>Green</button>
          <button onClick={()=>{setColor("yellow")}} 
           className='outline-none py-2 px-3 rounded-full' style={{ backgroundColor: "yellow", color: "white" }}>Yellow</button>
          <button onClick={()=>{setColor("red")}} 
           className='outline-none py-2 px-3 rounded-full' style={{ backgroundColor: "red", color: "white" }}>Red</button>
          <button onClick={()=>{setColor("orange")}} 
           className='outline-none py-2 px-3 rounded-full' style={{ backgroundColor: "orange", color: "white" }}>Orange</button>
          <button onClick={()=>{setColor("brown")}} 
           className='outline-none py-2 px-3 rounded-full' style={{ backgroundColor: "brown", color: "white" }}>Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
