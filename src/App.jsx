import { useState } from 'react'
import PlixGames from "./views/home"
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PlixGames/>
    </div>
  )
}

export default App
