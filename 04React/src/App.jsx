import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className="w-full h-screen duration-1000" style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-50 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-gray-600 px-4 py-3 rounded-sm'>


            <button onClick={() => setColor("red")}
            className=' outline-none px-3 py-2 cursor-pointer rounded-full text-white font-bold'
            style={{ backgroundColor: "red" }}
            >Red</button>


            <button onClick={() => setColor("green")}
            className='outline-none px-3 py-2 cursor-pointer rounded-full text-white font-bold'
              style={{ backgroundColor: "Green" }}
            >Green</button>


            <button onClick={() => setColor("blue")}
            className='outline-none px-3 py-2 cursor-pointer rounded-full text-white font-bold'
              style={{ backgroundColor: "blue" }}
            >Blue</button>


            <button onClick={() => setColor("yellow")}
            className='outline-none px-3 py-2 cursor-pointer rounded-full text-black font-bold'
              style={{ backgroundColor: "yellow" }}
            >Yellow</button>


            <button onClick={() => setColor("pink")}
            className='outline-none px-3 py-2 cursor-pointer rounded-full text-white font-bold'
              style={{ backgroundColor: "pink" }}
            >Pink</button>


            <button onClick={() => setColor("black")}
            className='outline-none px-3 py-2 cursor-pointer rounded-full text-white font-bold'
              style={{ backgroundColor: "black" }}
            >Black</button>

            <button onClick={() => setColor("teal")}
            className='outline-none px-3 py-2 cursor-pointer rounded-full text-white font-bold'
              style={{ backgroundColor: "teal" }}
            >Teal</button>

            <button onClick={() => {setColor("indigo")}}
             className='outline-none px-3 py-2 cursor-pointer rounded-full text-white font-bold'
              style={{ backgroundColor: "indigo" }}
            >Indigo</button>


            <button onClick={() => {setColor("white")}}
             className='outline-none px-3 py-2 cursor-pointer rounded-full text-black font-bold'
              style={{ backgroundColor: "white" }}
            >Reset</button>


          </div>
        </div>
      </div>
    </>
  )
}

export default App
