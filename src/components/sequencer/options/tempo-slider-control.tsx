import { Slider } from "@/components/ui/slider"

export default function TempoSliderControl() {
  return <Slider defaultValue={[50]} max={100} step={5} className="w-[150px]" />
}
