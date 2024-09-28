import { useOptions } from "@/components/providers/options-context"
import { VerticalSlider } from "@/components/ui/vertical-slider"

export default function TempoSliderControl() {
  const { tempo, setTempo } = useOptions()

  return (
    <VerticalSlider
      defaultValue={[tempo]}
      max={280}
      min={30}
      step={5}
      onValueChange={(value) => setTempo(value[0])}
    />
  )
}
