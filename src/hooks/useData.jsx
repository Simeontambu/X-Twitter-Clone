import { createContext, useContext, useState, useEffect } from "react"
import fileJson from "./../data/initial-data copy.json"
import tweeetPicture from "../../src/images/logo-rond-twitter.svg"
import newYorkTime from "../../src/images/logoNewYorkTime.svg"
import cnn from "../../src/images/tweet-profile-photo.svg"
import axios from "axios"

const DataContext = createContext()

export function useData() {
  const data = useContext(DataContext)

  return data
}

export function DataContextProvider({ children }) {
  const [isLiked, setIsLiked] = useState(false)
  const [data, setData] = useState(fileJson)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const tweetsResponse = await axios.get("http://localhost:8000/tweets")
        const currentUserResponse = await axios.get(
          "http://localhost:8000/currentUser"
        )
        const combinedData = {
          tweets: tweetsResponse.data,
          currentUser: currentUserResponse.data,
        }
        setData(combinedData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } 
    }

    fetchData()
  }, [])

  // Function to add tweet to tweet list
  const addTweet = (newTweet) => {
    axios
      .post("http://localhost:8000/tweets", newTweet)
      .then((response) => {
        console.log("data", response.data)

        setData((data) => {
          const updatedTweets = [response.data, ...data.tweets]
          return { ...data, tweets: updatedTweets }
        })
      })
      .catch((error) => {
        console.error("Error posting tweet:", error)
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
