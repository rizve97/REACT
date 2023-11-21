import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-400 text-black p-6 rounded-xl mb-4'>AvoidRafa</h1>
      
      <Card username="RAEF AL" description = "Raef Al Hasan Rafa (born 27 October 1988) is a Bangladeshi singer, songwriter, and multi-instrumentalist." btn="Go for more" />
      <Card username ="RAFA" description="Nothing but Everything " btn="More"/>

       
    </>
  )
}

export default App
