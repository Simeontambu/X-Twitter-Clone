import Image from "../home/image"
import { useData } from "../../../hooks/useData"
import { useParams } from "react-router-dom"
import Button from "../home/button"
import ProfileName from "./profileName"
import { FaRegCalendarAlt } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"
import { WiDirectionLeft } from "react-icons/wi"
import Private from "./../../../images/Private.svg"


export default function About() {
  
  const { loading,userDataAndTweet ,userByUsername,userTweetByUsername} = useData()
  const { user } = useParams()

//Recovery of user data and tweets
  userDataAndTweet(user)
  const numberOfPosts = userTweetByUsername.length

  return (
    <>
      {loading ? "" : userByUsername.name === user && (
        <div>
          <div className="profile-header">
            <WiDirectionLeft size="24" />
            <div>
              <div className="setting-icone">
                <ProfileName name={userByUsername.name} />
                <Image src={Private} />
              </div>

              <span className="tweet-title-details">
                <span>{`${numberOfPosts} posts`}</span>
              </span>
            </div>
          </div>

          <div className="profile-cover">
            <Image className="profile-cover-bg" src={userByUsername.profileBackground}/>
          </div>
          <div className="profile-photo-profile-edit-button ">
            <Image src={userByUsername.profilePicture} className="profile-photo" />
            <Button name="Edit profile" className="profile-edit-button" />
          </div>


          <div className="about-profile">
            <div className="about-profile-icone">
              <div className="pseudo-username">
                <div className="setting-icone">
                  <span>{userByUsername.name}</span>

                  <Image src={Private} />
                </div>
                <span className="tweet-title-details">
                  {userByUsername.handle}
                </span>
              </div>

              <span className="biography">{userByUsername.bio}</span>
            </div>
            <div className="city-joined biography tweet-title-details">
              <span className="location setting-icone">
                <IoLocationOutline />
                <span>{userByUsername.location}</span>
              </span>

              <span className="year-joined setting-icone">
                {" "}
                <FaRegCalendarAlt /> <span>{userByUsername.createdAt}</span>
              </span>
            </div>
            <div className="subscrib biography">
              <span className="subscriptions">
                <span>{userByUsername.followersCount}</span>

                <span className="tweet-title-details">Subscriptions</span>
              </span>
              <span className="subscriptions">
                <span>{userByUsername.followingCount}</span>
                <span className="tweet-title-details">Subscribers</span>
              </span>
            </div>
          </div>
        </div>
      )}
      {/* {loading ? "" : <div>
        {filteredTweets.slice(0, 1).map((tweet) => {
          return (
            <>
              <div key={tweet.id}>
                <div className="profile-header">
                  <WiDirectionLeft size="24" />
                  <div>
                    <div className="setting-icone">
                      <ProfileName name={tweet.name} />
                      <Image src={Private} />
                    </div>
                    <span className="tweet-title-details">
                      <span> {`${numberOfPosts} posts`}</span>
                    </span>
                  </div>
                </div>

                <div className="profile-cover">
                  <Image className="profile-cover-bg"/>
                </div>
                <div className="profile-photo-profile-edit-button">
                  <Image src={tweet.profileUser} className="profile-photo" />
                  <div className="follow-more">
                  <Image src={more} className="more-button"/>
                  <Button name="Follow" className="profile-edit-button profile-edit-button-color" />
                  </div>
                </div>
                <div className="about-profile">
                  <div className="about-profile-icone">
                    <div className="pseudo-username">
                      <div className="setting-icone">
                        <span>{tweet.name}</span>
                        <Image src={Private} />
                      </div>
                      <span className=" tweet-title-details">
                        {tweet.author}
                      </span>
                    </div>

                    <span className="biography">{tweet.biography}</span>
                  </div>

                  <div className=" biography city-joined tweet-title-details">
                    <span className="location setting-icone">
                      <IoLocationOutline />
                      <span>{tweet.city}</span>
                    </span>
                    <span className="year-joined setting-icone">
                      <FaRegCalendarAlt />
                      <span>{tweet.yearJoined}</span>
                    </span>
                  </div>
                  <div className="subscrib biography">
                    <span className="subscriptions">
                      <span>{tweet.numberSubscriptions}</span>

                      <span className="tweet-title-details">Subscriptions</span>
                    </span>
                    <span className="subscriptions">
                      <span>{tweet.numberSubscribers}</span>

                      <span className="tweet-title-details">Subscribers</span>
                    </span>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>} */}
    </>
  )
}
