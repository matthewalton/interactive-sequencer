import { useOptions } from "@/components/providers/options-context"
import LeftSideControls from "../controls/left-side-controls"
import RightSideControls from "../controls/right-side-controls"
import { cn } from "@/lib/utils"

export default function StepGrid() {
  const { gridMap } = useOptions()

  return (
    <div className="w-full rounded-sm bg-zinc-800 py-4">
      <div className="flex justify-center">
        <LeftSideControls />

        <div className="flex flex-col gap-2">
          {gridMap.map((row, i) => (
            <StepGridRow key={i} row={row} rowIndex={i} />
          ))}
        </div>

        <RightSideControls />
      </div>
    </div>
  )
}

function StepGridRow({ row, rowIndex }: { row: number[]; rowIndex: number }) {
  return (
    <div className="flex flex-nowrap items-center justify-center gap-3">
      {row.map((_, i) => (
        <StepGridCell key={i} rowIndex={rowIndex} columnIndex={i} />
      ))}
    </div>
  )
}

function StepGridCell({
  rowIndex,
  columnIndex,
}: {
  rowIndex: number
  columnIndex: number
}) {
  const { toggleGridCell, gridCellIsActive } = useOptions()

  return (
    <div
      className={cn("h-10 w-10 cursor-pointer rounded-sm border bg-primary", {
        "bg-red-700": gridCellIsActive(rowIndex, columnIndex),
      })}
      onClick={() => toggleGridCell(rowIndex, columnIndex)}
    ></div>
  )
}
