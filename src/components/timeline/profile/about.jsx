import Image from "../home/image"
import { useData } from "../../../hooks/useData"
import { Link, useParams } from "react-router-dom"
import Button from "../home/button"
export default function About() {
  const { data } = useData()
  const currentUser = data.currentUser

  const tweets = data.tweets
  const { user } = useParams()
  const filteredTweets = tweets.filter(
    (tweet) => tweet.name === user && tweet.name != currentUser.pseudo
  )

  return (
    <>
      {currentUser.pseudo === user && (
        <div>
          <div className="profile-cover">
            <Image />
          </div>
          <div>
            <Image src={currentUser.profilePicture} className="profile-photo" />
          </div>

          <div className="about-profile">
            <span>{currentUser.pseudo}</span>
            <span className="tweet-title-details">{currentUser.userName}</span>
            <span>{currentUser.biography}</span>
            <div className="city-joined">
              <span className="location">{currentUser.city}</span>
              <span className="year-joined">{currentUser.yearJoined}</span>
            </div>
            <div className="subscrib">
              <span>
                {currentUser.numberSubscriptions}
                <span className="tweet-title-details">Subscriptions</span>
              </span>
              <span>
                {currentUser.numberSubscribers}
                <span className="tweet-title-details">Subscribers</span>
              </span>
            </div>
          </div>
        </div>
      )}
      <div>
        {filteredTweets.slice(0, 1).map((tweet) => {
          return (
            <>
              <div key={tweet.id}>
                <div className="profile-cover">
                  <Image />
                </div>
                <Image src={tweet.profileUser} className="profile-photo" />
                <div className="about-profile">
                  <span>{tweet.name}</span>
                  <span className="tweet-title-details">{tweet.author}</span>
                  <span>{tweet.biography}</span>
                  <div className="city-joined tweet-title-details">
                    <span>{tweet.city}</span>
                    <span>{tweet.yearJoined}</span>
                  </div>
                  <div className="subscrib">
                    <span>
                      {tweet.numberSubscriptions}
                      <span className="tweet-title-details">Subscriptions</span>
                    </span>
                    <span>
                      {tweet.numberSubscribers}
                      <span className="tweet-title-details">Subscribers</span>
                    </span>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
