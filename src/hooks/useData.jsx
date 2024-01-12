import { createContext, useContext, useState, useEffect } from "react";
// import tweetData from "../utils/tweetData";
import fileJson from "./../data/initial-data.json";

const DataContext = createContext();

export function useData() {
  const data = useContext(DataContext);

  return data;
}

export function DataContextProvider({ children }) {
  const [data, setData] = useState(fileJson);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
