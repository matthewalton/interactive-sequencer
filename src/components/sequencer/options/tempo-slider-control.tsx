import { VerticalSlider } from "@/components/ui/vertical-slider"

export default function TempoSliderControl() {
  return <VerticalSlider defaultValue={[50]} max={100} step={5} />
}
