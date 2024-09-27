import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react"

interface OptionsContextProps {
  tempo: number
  setTempo: (value: number) => void
}

const OptionsContext = createContext<OptionsContextProps | undefined>(undefined)

export function OptionsProvider({ children }: { children: ReactNode }) {
  const [tempo, setTempo] = useState(75.0)

  useEffect(() => {
    console.log("tempo changed", tempo)
  }, [tempo])

  return (
    <OptionsContext.Provider value={{ tempo, setTempo }}>
      {children}
    </OptionsContext.Provider>
  )
}

export function useTempo() {
  const context = useContext(OptionsContext)
  if (!context) {
    throw new Error("useOptions must be used within a OptionsProvider")
  }
  return context
}
