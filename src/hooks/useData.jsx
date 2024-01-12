import { createContext, useContext, useState, useEffect } from "react";
// import tweetData from "../utils/tweetData";
import fileJson from "../data/initial-data.json";

const DataContext = createContext();

export function useData() {
  const data = useContext(DataContext);
  
  return data;
}

export function DataContextProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(fileJson)
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error("Erreur lors de la récupération des données :", error));
  }, []);


  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}