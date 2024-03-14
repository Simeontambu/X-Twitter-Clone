import { useData } from "../../../hooks/useData"
import { useParams } from "react-router-dom"
import { LoaderTweet } from "../../loader"
import { tweetMap } from "../../../hooks/useMap"
import Tweet from "../home/tweet"

export default function UserTweets() {
  const { data, loading } = useData()
  const { user } = useParams()
  const tweetsData = data.tweets
  const filteredTweets = tweetsData.filter((tweet) => tweet.authorName === user)
  return (
    <>
      {loading ? (
        <LoaderTweet />
      ) : (
        <div className="tweets">
          {filteredTweets.map((tweet) => {
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
