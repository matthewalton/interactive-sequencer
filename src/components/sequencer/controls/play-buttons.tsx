import { useOptions } from "@/components/providers/options-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CircleIcon, PauseIcon, PlayIcon, SquareIcon } from "lucide-react"

export default function PlayButtons() {
  const { isPlaying, isPaused, setIsPlaying, setIsPaused } = useOptions()

  return (
    <div className="flex h-full gap-4">
      <div className="mt-auto flex w-[50px] flex-col items-center justify-end gap-2">
        <RecordButton />
        <PauseButton
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />
        <PlayStopButton
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />
      </div>
    </div>
  )
}

function PlayStopButton({
  isPlaying,
  isPaused,
  setIsPlaying,
  setIsPaused,
}: {
  isPlaying: boolean
  isPaused: boolean
  setIsPlaying: (value: boolean) => void
  setIsPaused: (value: boolean) => void
}) {
  return (
    <Button
      type="button"
      variant="default-no-hover"
      className="h-10 w-10 rounded-sm border border-primary/50 bg-background"
      size="icon"
      onClick={() => {
        setIsPlaying(!isPlaying && !isPaused)
        setIsPaused(false)
      }}
    >
      {isPlaying || isPaused ? (
        <SquareIcon size={24} fill="white" />
      ) : (
        <PlayIcon size={30} fill="white" />
      )}
    </Button>
  )
}

function PauseButton({
  isPlaying,
  isPaused,
  setIsPlaying,
  setIsPaused,
}: {
  isPlaying: boolean
  isPaused: boolean
  setIsPlaying: (value: boolean) => void
  setIsPaused: (value: boolean) => void
}) {
  return (
    <Button
      type="button"
      variant="default-no-hover"
      className={cn(
        "h-10 w-10 rounded-sm border border-primary/50 bg-background",
        {
          "ring-1 ring-zinc-200": isPaused,
        },
      )}
      size="icon"
      disabled={!isPlaying && !isPaused}
      onClick={() => {
        const currentPausedState = isPaused

        setIsPaused(!currentPausedState)
        setIsPlaying(currentPausedState)
      }}
    >
      <PauseIcon size={32} fill="white" />
    </Button>
  )
}

function RecordButton() {
  return (
    <Button
      type="button"
      variant="default-no-hover"
      className="h-10 w-10 rounded-sm border border-primary/50 bg-background"
      size="icon"
      disabled
    >
      <CircleIcon size={28} fill="white" />
    </Button>
  )
}
