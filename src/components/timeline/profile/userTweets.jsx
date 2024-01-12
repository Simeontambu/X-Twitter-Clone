import { useData } from "../../../hooks/useData"

export default function UserTweets() {
  const tweetsUser = useData()
//   const currentUser = tweetsUser.currentUser;
//   const tweetdata = tweetsUser.tweets;

  return (
    <>
      {/* {tweetdata.map((tweet) => {
        return (
          <div key={tweet.id}>
            <h1>{tweet.author}</h1>
          </div>
        )
      })} */}
    </>
  )
}
