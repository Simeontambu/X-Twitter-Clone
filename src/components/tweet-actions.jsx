import Reply from "./../images/Reply.svg";
import Retweet from "./../images/Retweet.svg";
import React from "./../images/React.svg";
import Share from "./../images/Share.svg";
import Profile from "./profile";

export default function Tweetactions({ userComment, userRetweet, userLove }) {
  return (
    <>
      <div className="tweet-actions">
        <div className="tweet-action">
          <Profile src={Reply} />
          {userComment}
        </div>

        <div className="tweet-action">
          <Profile src={Retweet} />
          {userRetweet}
        </div>

        <div className="tweet-action">
          <Profile src={React} />
          {userLove }
        </div>
        <div className="tweet-action">
          <Profile src={Share} />
        </div>
      </div>
    </>
  );
}
