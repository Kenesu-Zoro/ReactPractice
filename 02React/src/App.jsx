import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  let addValue = () =>{
    if(counter>=10){
      return
    }
    setCounter(counter+1)
  }

  let subValue = () =>{
    if(counter<=0){
      return
    }
    setCounter(counter-1)
  }
  return(
    <>
    <h1>Counter</h1>
    <h3>counter = {counter}</h3>
    <button onClick={addValue}>+</button>
    <button onClick={subValue}>-</button>
    </>
  )

 
  
}

export default App
