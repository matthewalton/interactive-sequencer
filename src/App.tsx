import "./App.css"
import Sequencer from "./components/sequencer/sequencer"

export default function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <Sequencer />
    </div>
  )
}
