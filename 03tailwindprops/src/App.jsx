import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
/*
  let myObj={
    ID: "akash10",
    age: 32
  }

  let myArr=[1,2,3]
*/
  return (
    <>
      <h1 className='bg-green-400 text-black  p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card userName="Name 1" btnText="Click Me"/>
      <Card userName="Name 2"
      btnText="Visit Here"/>
      
      
    </>
  )
}

export default App
