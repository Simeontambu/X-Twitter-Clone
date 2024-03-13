import { createContext, useContext, useState, useEffect } from "react"
import tweeetPicture from "../../src/images/logo-rond-twitter.svg"
import newYorkTime from "../../src/images/logoNewYorkTime.svg"
import cnn from "../../src/images/tweet-profile-photo.svg"
import axios from "axios"
import io from "socket.io-client"

const DataContext = createContext()

export function useData() {
  const data = useContext(DataContext)

  return data
}

export function DataContextProvider({ children }) {
  const [isLiked, setIsLiked] = useState(false)
  const [data, setData] = useState({})
  const [userByUsername, setUserByUsername] = useState({})
  const [userTweetByUsername, setUserTweetByUsername] = useState({})
  const [loading, setLoading] = useState(true)
  const [isLogin, setIslogin] = useState({})
  const [login, setIlogin] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const tweetsResponse = await axios.get(
          "https://twitter-clone-api-c1-simeontambu-2.onrender.com/tweets"
        )
        const combinedData = {
          tweets: tweetsResponse.data.reverse(),
          current: "",
        }
        setData(combinedData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  //Recovery of user data and tweets
  function userDataAndTweet(user) {
    useEffect(() => {
      const fetchData = async () => {
        try {
          let currentUserResponse
          let currentUserTweetResponse
          if (user) {
            currentUserResponse = await axios.get(
              `https://twitter-clone-api-c1-simeontambu-2.onrender.com/${user}`
            )
            currentUserTweetResponse = await axios.get(
              `https://twitter-clone-api-c1-simeontambu-2.onrender.com/${user}/tweets`
            )
          }
          setUserByUsername(currentUserResponse.data)
          setUserTweetByUsername(currentUserTweetResponse.data)
          setLoading(false)
        } catch (error) {
          console.error("Error fetching data:", error)
        }
      }

      fetchData()
    }, [user])
  }

  function userLogin(username) {
    useEffect(() => {
      const fetchData = async () => {
        try {
          let userResponse
          if (username) {
            userResponse = await axios.get(
              `https://twitter-clone-api-c1-simeontambu-2.onrender.com/${username}`
            )
          }
          console.log(userResponse.data)
          setIslogin(userResponse.data)
          setLoading(false)
        } catch (error) {
          console.error("Error fetching data:", error)
        }
      }

      fetchData()
    }, [username])
  }

  // Function to add tweet to tweet list
  const addTweet = async (newTweet) => {
    await axios
      .post(
        "https://twitter-clone-api-c1-simeontambu-2.onrender.com/tweets",
        newTweet
      )
      .then((response) => {
       
      })
      .catch((error) => {
        console.error("Error posting tweet:", error)
      })
  }
  const addTweets =  (newTweet) => {
        setData((prevData) => {
          const updatedTweets = [newTweet, ...data.tweets]
          return { ...prevData, tweets: updatedTweets }
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
    loading,
    userDataAndTweet,
    userByUsername,
    userTweetByUsername,
    isLogin,
    setIslogin,
    userLogin,
    login,
    setIlogin,
    setLoading,
    addTweets
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
