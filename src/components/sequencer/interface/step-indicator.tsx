import { useOptions } from "@/components/providers/options-context"
import { cn } from "@/lib/utils"

export default function StepIndicator({ stepLength }: { stepLength: number }) {
  const { currentStep } = useOptions()

  return (
    <div className="w-full rounded-sm bg-zinc-800 px-4 py-2">
      <div className="flex flex-nowrap items-center justify-center gap-3">
        {Array(stepLength)
          .fill(null)
          .map((_, i) => (
            <StepIndicatorCell
              key={i}
              isSectionStart={i % 4 === 0}
              isCurrentStep={i === currentStep}
            />
          ))}
      </div>
    </div>
  )
}

function StepIndicatorCell({
  isSectionStart,
  isCurrentStep,
}: {
  isSectionStart: boolean
  isCurrentStep: boolean
}) {
  const { isPlaying, isPaused } = useOptions()

  return (
    <div
      className={cn("h-5 w-10 rounded-sm bg-zinc-700", {
        "border border-b-zinc-500": isSectionStart,
        "bg-primary": (isPlaying || isPaused) && isCurrentStep,
      })}
    ></div>
  )
}
