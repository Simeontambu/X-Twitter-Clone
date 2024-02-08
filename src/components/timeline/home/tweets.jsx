import React from "react"
import Image from "./image"
import TweetActions from "./tweetActions"
import Verified from "./../../../images/Verified.svg"
import { Link } from "react-router-dom"
import { useData } from "../../../hooks/useData"
import { tweetMap } from "../../../hooks/useMap"

export default function Tweets() {
  const { data } = useData()
  const tweetsData = data.tweets

  return (
    <>
      <div className="tweets">
        {tweetsData.map((tweet) => {
          return (
            <div className="tweet" key={tweet.id}>
              <Link to={`/${tweet.name}`}>
                <Image
                  className="tweet-avatar"
                  src={tweet.profileUser}
                  alt="profile-image"
                />
              </Link>

              <div className="tweet-content">
                <div className="tweet-body">
                  <span className="tweet-title">
                    <Link to={`/${tweet.name}`} className="link active">
                      <span className="tweet-title-author">{tweet.name}</span>
                    </Link>
                    <span>
                      <Image src={Verified} />
                    </span>
                    <Link to={`/${tweet.name}`} className="link">
                      <span className="tweet-title-details">
                        {tweet.author}
                      </span>
                    </Link>
                    <span className="tweet-title-details">{" . "}</span>
                    <span className="tweet-title-details">
                      {tweet.dateOrTime}
                    </span>
                  </span>

                  <p className="tweet-text">{tweet.content}</p>
                  <div className="tweet-image">
                    {tweet.Img && <Image src={tweet.Img} />}
                  </div>
                </div>
                {/* here we provide the data already mapped  */}
                <tweetMap.Provider value={tweet}>
                  <TweetActions />
                </tweetMap.Provider>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export const addTweets = () => {
  return
}
