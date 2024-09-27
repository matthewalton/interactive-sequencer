import TempoSliderControl from "./options/tempo-slider-control"

export default function SequencerOptions() {
  return (
    <div className="w-full rounded-sm bg-zinc-800 p-4">
      <div className="flex justify-end">
        <TempoSliderControl />
      </div>
    </div>
  )
}
