import TempoSliderDisplay from "./controls/tempo-slider/tempo-slider-display"

export default function SequencerControls() {
  return (
    <div className="w-full rounded-sm bg-zinc-800 p-4">
      <div className="flex justify-end">
        <TempoSliderDisplay />
      </div>
    </div>
  )
}
