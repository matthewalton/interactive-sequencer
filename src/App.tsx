import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { Button } from "./components/ui/button"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <div className="flex flex-row items-center justify-center gap-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-3xl font-bold underline">Vite + React</h1>

      <div className="flex flex-col items-center justify-center gap-4">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}
