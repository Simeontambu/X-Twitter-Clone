import Profile from "./profile";
import Tweetactions from "./tweet-actions";
import { PiSealCheckFill } from "react-icons/pi";
export default function Tweets(props) {
  return (
    <>
      <div className="tweets">
        <div className="tweet">
          <Profile
            className="avatar tweet-avatar"
            src={props.profileUser}
            alt="profile-image"
          />
          <div className="tweet-content">
            <div className="tweet-body">
              <p className="tweet-text">
                <span className="tweet-title-author">
                  {props.username}
                  <span>
                    <PiSealCheckFill />
                  </span>
                  <span className="tweet-title-details">
                    {props.author}
                    {" . "}
                  </span>
                  <span className="tweet-title-details">
                    {props.dateOrTime}
                  </span>
                </span>

                <br />
                <br />
                {props.children}
              </p>
              {props.img && (
                <Profile className="avatar tweet-image" src={props.img} />
              )}
            </div>
            <Tweetactions
              userComment={props.comment}
              userRetweet={props.retweet}
              userLove={props.love}
            />
          </div>
        </div>
      </div>
    </>
  );
}
