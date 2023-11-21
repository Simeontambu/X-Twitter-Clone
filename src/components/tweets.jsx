import React from "react";
import Profile from "./profile";
import TweetActions from "./tweet-actions";
import { PiSealCheckFill } from "react-icons/pi";
import tweetsData from "../tweet-data";

export default function Tweets() {
  return (
    <>
    <div className="tweets" >
      {tweetsData.map((tweet, index) => {
        console.log(tweet);
        return (
          
            <div className="tweet" key={index}>
              <Profile
                className="tweet-avatar"
                src={tweet.profileUser}
                alt="profile-image"
              />
              <div className="tweet-content">
                <div className="tweet-body">
                  <span className="tweet-title">
                    <span className="tweet-title-author">{tweet.name}</span>
                    <span>
                      <PiSealCheckFill />
                    </span>
                    <span className="tweet-title-details">
                      {tweet.author}
                    </span>
                    <span className="tweet-title-details">{" . "}</span>
                    <span className="tweet-title-details">
                      {tweet.dateOrTime}
                    </span>
                  </span>

                  <p className="tweet-text">{tweet.content}</p>

                  {tweet.Img && (
                    <Profile className="tweet-image" src={tweet.Img} />
                  )}
                </div>
                <TweetActions
                  userComment={tweet.comment}
                  userRetweet={tweet.retweet}
                  userLove={tweet.love}
                />
              </div>
            </div>
         
        );
      })}
       </div>
    </>
  )
}