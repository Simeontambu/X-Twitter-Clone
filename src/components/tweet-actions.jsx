import { FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
export default function Tweetactions({userComment,userRetweet,userLove}) {
  return (
    <>
      <div className="tweet-actions">
        <div className="tweet-action">
          <FiMessageCircle />
          {userComment}
        </div>

        <div className="tweet-action">
          <FaRetweet />
          {userRetweet}
        </div>

        <div className="tweet-action">
          <span><CiHeart />{userLove}</span>
          
        </div>
        <div className="tweet-action">
          <FiShare />
        </div>
      </div>
    </>
  );
}
