import "./App.css"
import SequencerInterface from "./components/sequencer/sequencer-interface"

export default function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <SequencerInterface />
    </div>
  )
}
