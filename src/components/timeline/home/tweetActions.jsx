import { useData } from "../../../hooks/useData"
import ReplyIcon from "./replyIcon"
import RetweetIcon from "./retweetIcon"
import ReactIcone from "./reactIcon"
import ShareIcon from "./shareIcon"

export default function Tweetactions() {

  return (
    <>
      <div className="tweet-actions">
        <ReplyIcon />
        <RetweetIcon />
        <ReactIcone />
        <ShareIcon />
      </div>
    </>
  )
}
