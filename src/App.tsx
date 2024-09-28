import "./App.css"
import Sequencer from "./components/sequencer/sequencer"

export default function App() {
  return (
    <div className="m-auto flex h-[800px] w-[1100px] flex-col items-center justify-center gap-5">
      <Sequencer />
    </div>
  )
}
