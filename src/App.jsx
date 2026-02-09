import { useState } from 'react'
import PlixGames from "./views/home"
import { Analytics } from "@vercel/analytics/react";
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PlixGames/>
      <Analytics />
    </div>
  )
}

export default App
