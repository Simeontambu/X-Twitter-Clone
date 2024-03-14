import { useData } from "../../../../hooks/useData"
import Tweet from "../../home/tweet"
import { tweetMap } from "../../../../hooks/useMap"

export default function TweetMedia() {
  const { tweetMedia } = useData()
  return (
    <>
      <div className="tweets">
        {tweetMedia.map((tweet) => {
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
