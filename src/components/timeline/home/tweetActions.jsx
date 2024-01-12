import { useData } from "../../../hooks/useData"
import ReplyIcon from "./replyIcon"
import RetweetIcon from "./retweetIcon"
import ReactIcone from "./reactIcon"
import ShareIcon from "./shareIcon"

export default function Tweetactions({
  userComments,
  userRetweets,
  userLikes,
}) {
  const tweetsUser = useData()
  return (
    <>
      <div className="tweet-actions">
        <ReplyIcon userComment={userComments} />
        <RetweetIcon userRetweet={userRetweets} />
        <ReactIcone userLike={userLikes} />
        <ShareIcon />
      </div>
    </>
  )
}
