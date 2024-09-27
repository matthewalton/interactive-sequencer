import { useTempo } from "@/components/providers/options-context"

export default function TempoSliderDisplay() {
  const { tempo } = useTempo()

  return (
    <div className="flex items-center gap-2">
      <div className="flex h-[50px] w-[100px] items-center justify-center rounded-sm bg-zinc-900">
        <div className="font-mono text-white">{tempo.toFixed(2)}</div>
      </div>
    </div>
  )
}
