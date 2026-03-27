import PlixGames from "./views/home"
import { Analytics } from "@vercel/analytics/react";
import './index.css'

function App() {
  return (
    <div>
      <PlixGames/>
      <Analytics />
    </div>
  )
}

export default App
