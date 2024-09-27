import StepGridInterface from "./sequencer/step-grid-interface"
import StepIndicator from "./sequencer/step-indicator"

export default function Sequencer() {
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
