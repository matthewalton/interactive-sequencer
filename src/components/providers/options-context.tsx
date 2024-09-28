import { createContext, useState, useContext, ReactNode } from "react"

interface OptionsContextProps {
  tempo: number
  isPaused: boolean
  isPlaying: boolean
  setTempo: (value: number) => void
  setIsPaused: (value: boolean) => void
  setIsPlaying: (value: boolean) => void
}

const OptionsContext = createContext<OptionsContextProps | undefined>(undefined)

export function OptionsProvider({ children }: { children: ReactNode }) {
  const [tempo, setTempo] = useState(75.0)
  const [isPaused, setIsPaused] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <OptionsContext.Provider
      value={{
        tempo,
        setTempo,
        isPaused,
        setIsPaused,
        isPlaying,
        setIsPlaying,
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
