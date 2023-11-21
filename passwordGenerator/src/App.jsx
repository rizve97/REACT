import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(useState, useCallback) {
  
  const [length, setLength] = useState(10);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`" 

    for (let i = 1; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) ;
      pass = str.charAt(Char);
      
    }

    setPassword(pass)

  }, [length, numberAllow, charAllow, setPassword ])


  

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow- rounded-lg'>HUDAI</div>

    </>
  )

  }
export default App
