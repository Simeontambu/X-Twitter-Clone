import { FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
export default function Tweetactions(props) {
  return (
    <>
      <div className="tweet-actions">
        <span className="tweet-action">
          <FiMessageCircle />
          <span>{props.userComment}</span>
        </span>

        <span className="tweet-action">
          <FaRetweet />
          <span>{props.userRetweet}</span>
        </span>

        <span className="tweet-action">
          <CiHeart />
          <span>{props.userLove}</span>
        </span>

        <span className="tweet-action">
          <FiShare />
        </span>
      </div>
    </>
  );
}
