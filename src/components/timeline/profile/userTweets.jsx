import { useData } from "../../../hooks/useData"
import { useParams } from "react-router-dom"

import { tweetMap } from "../../../hooks/useMap"
import Tweet from "../home/tweet"

export default function UserTweets() {
  const { data } = useData()

  const tweets = data.tweets
  const { user } = useParams()

  const filteredTweets = tweets.filter((tweet) => tweet.name === user)

  return (
    <>
      <div className="tweets">
        {filteredTweets.map((tweet) => {
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
