import { useData } from "../../../hooks/useData"

export default function UserTweets() {
  const tweetsUser = useData()
  const currentUser = tweetsUser.currentUser;
  const tweetadata = tweetsUser.tweets;

  return (
    <>
      {tweetadata.map((tweet) => {
        return (
          <div key={tweet.id}>
            <h1>{tweet.author}</h1>
          </div>
        )
      })}
    </>
  )
}
