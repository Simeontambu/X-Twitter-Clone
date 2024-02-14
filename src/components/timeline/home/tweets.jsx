import React from "react"
import { useData } from "../../../hooks/useData"
import { tweetMap } from "../../../hooks/useMap"
import Tweet from "./tweet"
import { LoaderTweet } from "../../loader"

export default function Tweets() {
  const { data, loading } = useData()
  const tweetsData = data.tweets

  return (
    <>
      {loading ? (
        <LoaderTweet />
      ) : (
        <div className="tweets">
          {tweetsData.map((tweet) => {
            return (
              <tweetMap.Provider value={tweet}>
                <Tweet />
              </tweetMap.Provider>
            )
          })}
        </div>
      )}
    </>
  )
}
