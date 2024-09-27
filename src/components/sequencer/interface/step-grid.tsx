import TempoSliderControl from "../options/tempo-slider-control"

export default function StepGrid({ stepLength }: { stepLength: number }) {
  const gridRows = 8

  return (
    <div className="w-full rounded-sm bg-zinc-800 p-4">
      <div className="flex justify-center gap-2">
        <div className="w-[100px]"></div>
        <div className="flex flex-col gap-2">
          {Array(gridRows)
            .fill(null)
            .map((_, i) => (
              <StepGridRow key={i} stepLength={stepLength} />
            ))}
        </div>
        <div className="flex w-[100px] justify-center">
          <TempoSliderControl />
        </div>
      </div>
    </div>
  )
}

function StepGridRow({ stepLength }: { stepLength: number }) {
  return (
    <div className="flex flex-nowrap items-center justify-center gap-3">
      {Array(stepLength)
        .fill(null)
        .map((_, i) => (
          <StepGridCell key={i} />
        ))}
    </div>
  )
}

function StepGridCell() {
  return (
    <div className="h-10 w-10 cursor-pointer rounded-sm border bg-zinc-700"></div>
  )
}
