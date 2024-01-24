import { createContext, useContext, useState } from "react";
import fileJson from "./../data/initial-data.json";

const DataContext = createContext();

export function useData() {
  const data = useContext(DataContext);

  return data;
}

export function DataContextProvider({ children }) {
  const [data, setData] = useState(fileJson);

  // Function to add tweet to tweet list
  const addTweet = (newTweet) => {
    setData((data) => {
      
      const updatedTweets = [newTweet, ...data.tweets];
      
      return { ...data, tweets: updatedTweets };
      
    });
  };
  const value = { data, addTweet };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
