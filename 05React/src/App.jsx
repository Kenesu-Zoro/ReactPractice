import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, SetnumberAllowed] = useState(false);
  const [charAllowed, SetcharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "@#$&~*"
    }
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]) /*Dependencies*/

  const copyPasswordToClipborad = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-2xl mx-auto shawdow-md rounded-lg p-5 my-50 text-white text-2xl text-center font-bold bg-gray-600 '>Password generator :
        <div className='flex rounded-lg overflow-hidden mt-5 mb-auto border-b-blue-950'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-3 px-3 bg-blue-200 text-black placeholder-gray-400 rounded-lg'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipborad}
            className='bg-blue-500 text-white px-5 py-2 ml-2 rounded-lg font-semibold 
  hover:bg-blue-600 active:bg-blue-700 transition transform hover:scale-105 duration-100'>Copy</button>
        </div>
        <div className='flex text-sm mt-5 gap-x-1'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={99}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1 ml-4'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                SetnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 ml-4'>
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                SetcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
