import { createContext, useContext } from "react"
import tweetData from "./../utils/tweetData"

const DataContext = createContext(null)

export function useData() {
  const data = useContext(DataContext)
  return data
}
export function DataContextProvider({ children }) {
  return (
    <DataContext.Provider value={tweetData}>{children}</DataContext.Provider>
  )
}
