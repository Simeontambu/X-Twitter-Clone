import { createContext, useContext, useState } from "react"
import fileJson from "./../data/initial-data.json"
import tweeetPicture from "../../src/images/logo-rond-twitter.svg"
import newYorkTime from "../../src/images/logoNewYorkTime.svg"
import cnn from "../../src/images/tweet-profile-photo.svg"

const DataContext = createContext()

export function useData() {
  const data = useContext(DataContext)

  return data
}

export function DataContextProvider({ children }) {
  const [data, setData] = useState(fileJson)

  const [isLiked, setIsLiked] = useState(false)

  // Function to add tweet to tweet list

  const addTweet = (newTweet) => {
    setData((data) => {
      const updatedTweets = [newTweet, ...data.tweets]

      return { ...data, tweets: updatedTweets }
    })
  }

  const value = {
    data,
    addTweet,
    tweeetPicture,
    newYorkTime,
    cnn,

    isLiked,

    setIsLiked,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
