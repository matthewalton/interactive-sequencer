import { useOptions } from "../providers/options-context"
import StepGridInterface from "./interface/step-grid"
import StepIndicator from "./interface/step-indicator"

export default function SequencerInterface() {
  const { stepLength } = useOptions()
  return (
    <div className="flex h-full flex-col gap-3">
      <StepIndicator stepLength={stepLength} />
      <StepGridInterface />
    </div>
  )
}
