import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Regular from './Components/Regular'
import Pure from './Components/Pure'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Regular/>
      <Pure/>
    </>
  )
}

export default App
