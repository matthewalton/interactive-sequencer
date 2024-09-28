import LeftSideControls from "../controls/left-side-controls"
import RightSideControls from "../controls/right-side-controls"

export default function StepGrid({ stepLength }: { stepLength: number }) {
  const gridRows = 8

  return (
    <div className="w-full rounded-sm bg-zinc-800 py-4">
      <div className="flex justify-center">
        <LeftSideControls />

        <div className="flex flex-col gap-2">
          {Array(gridRows)
            .fill(null)
            .map((_, i) => (
              <StepGridRow key={i} stepLength={stepLength} />
            ))}
        </div>

        <RightSideControls />
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
