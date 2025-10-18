import { useState, useCallback, useEffect, useRef, use } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharterAllowed] = useState(false);
  const [Password, setPasssword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()~{}[]+-=_"


    for (let i = 0; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1 )
        pass += str.charAt(char)
    }

    setPasssword(pass)

  }, [length, numberAllowed, charAllowed, setPasssword])

  const copyPasswordCopyTOClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(Password)
  }, [Password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div>
      <h2>Password Generator</h2>
        <div>
          <input type="text" 
          value={Password}
          placeholder='password'
          readOnly
          ref = {passwordRef}
          />
          <button
          onClick={copyPasswordCopyTOClipboard}
          >copy</button>
        </div>
        <div>
          <input type="range" 
          min = {6}
          max = {100}
          value={length}
          className='cusor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
        
          <label> Length: {length}</label>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id = "numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }} 
          />
          <label htmlFor="numberInput">Numbers</label>

          <input type="checkbox"
          defaultChecked={charAllowed}
          id = "char"
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }} 
          />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
