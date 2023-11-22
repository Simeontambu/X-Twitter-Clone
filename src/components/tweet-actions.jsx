import { FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
export default function Tweetactions(props) {
  return (
    <>
      <div className="tweet-actions">
        <div className="tweet-action">
          <FiMessageCircle />
          {props.userComment}
        </div>

        <div className="tweet-action">
          <FaRetweet />
          {props.userRetweet}
        </div>

        <div className="tweet-action">
          <CiHeart />
          {props.userLove}
        </div>
        <div className="tweet-action">
          <FiShare />
        </div>
      </div>
    </>
  );
}
