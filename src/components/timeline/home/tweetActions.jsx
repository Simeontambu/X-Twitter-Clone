import { useData } from "../../../hooks/useData"
import ReplyIcon from "./replyIcon"
import RetweetIcon from "./retweetIcon"
import ReactIcone from "./reactIcon"
import ShareIcon from "./shareIcon"

export default function Tweetactions() {

  return (
    <>
      <div className="flex justify-center items-center gap-[4.5rem] text-gray-400">
        <ReplyIcon />
        <RetweetIcon />
        <ReactIcone />
        <ShareIcon />
      </div>
    </>
  )
}
