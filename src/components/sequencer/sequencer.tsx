import SequencerInterface from "./sequencer-interface"
import SequencerControls from "./sequencer-controls"

export default function Sequencer() {
  return (
    <div className="h-min w-5/6 rounded-sm border bg-zinc-900 p-4 text-center shadow">
      <div className="flex flex-col gap-3">
        <SequencerControls />
        <SequencerInterface />
      </div>
    </div>
  )
}
