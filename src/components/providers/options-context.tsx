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
  setTempo: (value: number) => void
  setIsPaused: (value: boolean) => void
  setIsPlaying: (value: boolean) => void
  setStepLength: (value: number) => void
  setCurrentStep: (value: number) => void
}

const OptionsContext = createContext<OptionsContextProps | undefined>(undefined)

export function OptionsProvider({ children }: { children: ReactNode }) {
  const [tempo, setTempo] = useState(75.0)
  const [stepLength, setStepLength] = useState(16)

  const [isPaused, setIsPaused] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

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
    }
  }, [isPlaying, isPaused])

  return (
    <OptionsContext.Provider
      value={{
        tempo,
        setTempo,
        stepLength,
        setStepLength,
        isPaused,
        setIsPaused,
        isPlaying,
        setIsPlaying,
        currentStep,
        setCurrentStep,
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
