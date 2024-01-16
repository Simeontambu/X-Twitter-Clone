import { createContext, useContext } from "react";

// We create an already mapped data context that we will use the tweets component
export const tweetMap = createContext();
export function useMap() {
  const data = useContext(tweetMap);
  return data;
}
