import { useCallback, useState } from 'react'
import './App.css'
import ListValues from './assets/ListValues'
import Application from './Application'

function App() {
  const [dark, setDark] = useState(false)
  const [number, setNumber] = useState(0)
  const theam = {
    backgroundColor: dark ? "yellow" : "blue",
    color: dark ? "blue" : "yellow",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  const getList = useCallback(() => {
    return [number, number + 1, number + 2, number + 3, number + 4]
  },[number])
  return (
    <div style={theam}>
      <div className="flex flex-col">
        <div className="">
          <input
          type='number'
            value={number}
            onChange={e => setNumber(parseInt(e.target.value))}
          />
        </div>
        <div className="">
          <button style={{ padding: "13px", borderRadius: '12px', backgroundColor: "red", color: "white" }}
            onClick={() => setDark(prevDark => !prevDark)}>Change Theam
          </button>
        </div>
        <div className="p-4">
          <ListValues getElements={getList} />
        </div>
      </div>
    </div>
  )
}

export default App
