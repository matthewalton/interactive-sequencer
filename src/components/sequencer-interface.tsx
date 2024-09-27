import StepGridInterface from "./interface/step-grid"
import StepIndicator from "./interface/step-indicator"

export default function SequencerInterface() {
  const stepLength = 16

  return (
    <div className="h-min w-5/6 rounded-sm border bg-zinc-900 p-4 text-center shadow">
      <div className="flex h-full flex-col gap-3">
        <StepIndicator stepLength={stepLength} />
        <StepGridInterface stepLength={stepLength} />
      </div>
    </div>
  )
}
