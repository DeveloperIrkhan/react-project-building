import React from 'react'
import './App.css'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'

function App() {
  const [length, setLength] = useState(0)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [specialAllowed, setspecialAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789";
    if (specialAllowed) str += "`!@#$%^&*()_<?.>[]|";
    for (let index = 1; index < length; index++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllowed, specialAllowed])
  useEffect(() => { generatePassword() }, [length, numberAllowed, specialAllowed])
  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
  }
  return (
    <>
      <div>
        <div className="w-full max-w-lg mx-auto shadow-md rounded-lg mt-4  px-4 py-3 bg-gray-800 text-orange-600">
          <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden">
            <input
              type="text"
              name="password"
              id="password"
              value={password}
              readOnly
              className="block border-0 py-1 px-3 text-gray-900 w-full" />

            <button onClick={copyPassword}
              className='outline-none bg-blue-500 text-white 
            px-3 py-1 shrink-0 
            hover:bg-blue-700
          active:bg-blue-900 
            focus:outline-none focus:ring'>Copy</button>
          </div>
          <div className="flex items-center mt-4 gap-2">
            <input
              min={6}
              max={20}
              value={length}
              type="range"
              name="length"
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              id="" />
            <label htmlFor="length" className='text-white'>Length {length}</label>
            <input
              onChange={() => setnumberAllowed((prev) => !prev)}
              type="checkbox"
              defaultChecked={numberAllowed}
              name="" id="" />
            <label htmlFor="length" className='text-white'>Numbers</label>
            <input
              onChange={() => setspecialAllowed((prev) => !prev)}
              type="checkbox"
              defaultChecked={specialAllowed}
              name="" id="" />

            <label htmlFor="length" className='text-white'>Special Charector</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
