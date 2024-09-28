import {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
  ReactNode,
} from "react"

interface OptionsContextProps {
  tempo: number
  isPaused: boolean
  isPlaying: boolean
  stepLength: number
  currentStep: number
  gridMap: number[][]

  setTempo: (value: number) => void
  setIsPaused: (value: boolean) => void
  setIsPlaying: (value: boolean) => void

  toggleGridCell: (rowIndex: number, columnIndex: number) => void
  gridCellIsActive: (rowIndex: number, columnIndex: number) => boolean
}

const OptionsContext = createContext<OptionsContextProps | undefined>(undefined)

export function OptionsProvider({ children }: { children: ReactNode }) {
  const [tempo, setTempo] = useState(75.0)

  const [isPaused, setIsPaused] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const [currentStep, setCurrentStep] = useState(0)

  const stepLength = 16
  const gridRows = 8

  const [gridMap, setGridMap] = useState(() =>
    Array.from({ length: gridRows }, () => Array(stepLength).fill(0)),
  )

  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (isPlaying && !isPaused) {
      const interval = 60000 / tempo / 4 // convert bpm to ms per step
      intervalRef.current = window.setInterval(() => {
        setCurrentStep((prevStep) => (prevStep + 1) % stepLength)
      }, interval)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, isPaused, tempo, stepLength])

  useEffect(() => {
    if (!isPlaying && !isPaused) {
      setCurrentStep(0)

      setGridMap(
        Array.from({ length: gridRows }, () => Array(stepLength).fill(0)),
      )
    }
  }, [isPlaying, isPaused])

  useEffect(() => {
    setGridMap(
      Array.from({ length: gridRows }, () => Array(stepLength).fill(0)),
    )
  }, [gridRows, stepLength])

  function toggleGridCell(rowIndex: number, columnIndex: number) {
    if (!isPlaying && !isPaused) return

    const newGridMap = gridMap

    newGridMap[rowIndex][columnIndex] = newGridMap[rowIndex][columnIndex]
      ? 0
      : 1

    setGridMap(newGridMap)
  }

  function gridCellIsActive(rowIndex: number, columnIndex: number) {
    return gridMap[rowIndex][columnIndex] === 1
  }

  return (
    <OptionsContext.Provider
      value={{
        tempo,
        setTempo,
        stepLength,
        isPaused,
        setIsPaused,
        isPlaying,
        setIsPlaying,
        currentStep,
        gridMap,
        toggleGridCell,
        gridCellIsActive,
      }}
    >
      {children}
    </OptionsContext.Provider>
  )
}

export function useOptions() {
  const context = useContext(OptionsContext)
  if (!context) {
    throw new Error("useOptions must be used within a OptionsProvider")
  }
  return context
}
