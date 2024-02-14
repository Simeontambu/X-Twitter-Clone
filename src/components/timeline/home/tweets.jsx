import React from "react"
import { useData } from "../../../hooks/useData"
import { tweetMap } from "../../../hooks/useMap"
import Tweet from "./tweet"

export default function Tweets() {
  const { data } = useData()
  const tweetsData = data.tweets

  return (
    <>
      <div className="tweets">
        {tweetsData.map((tweet) => {
          return (
            <tweetMap.Provider value={tweet}>
              <Tweet />
            </tweetMap.Provider>
          )
        })}
      </div>
    </>
  )
}
