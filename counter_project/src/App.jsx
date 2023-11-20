import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
const [counter, setCounter]  = useState(1)

const addValue = () => {
  setCounter(counter+1)
  console.log(counter)
}

const cutValue = () => {
  setCounter(counter-1)
  console.log(counter)
}


  return (
    
    
    <>
     <h1>NEMESIS - Goddess of Retribution</h1>
     <h2>Tort Value: {counter}</h2>
     <button
     onClick = {addValue}
     >Enhance Tort</button>
     <br />
     <button
     onClick= {cutValue}
     >Decrease Tort</button>
    </>
  )
}

export default App
