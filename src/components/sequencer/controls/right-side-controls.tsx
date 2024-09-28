import TempoSliderControl from "./tempo-slider/tempo-slider-control"

export default function RightSideControls() {
  return (
    <div className="flex w-[100px] justify-center">
      <div className="h-1/2">
        <TempoSliderControl />
      </div>
    </div>
  )
}
