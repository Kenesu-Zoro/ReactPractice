import { useState } from 'react'

import './App.css'
import Card from './components.jsx/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    Name : "kenneth",
    Age : 21
  }

  

  return (
    <>
      <h1 className='bg-black text-red-800 p-10 rounded-3xl mb-8' >Tailwind test</h1>
      < Card username="Kenneth" Someobj={myObj} Btntxt='Click Me' />
      < Card username=""Chutesh Btntxt='Chutesh Me'/>
    </>
  )
}

export default App
