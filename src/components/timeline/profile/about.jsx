import Image from "../home/image"
import { useData } from "../../../hooks/useData"
import { Link, useParams } from "react-router-dom"
import Button from "../home/button"
import ProfileName from "./profileName"
import { FaRegCalendarAlt } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"
import { WiDirectionLeft } from "react-icons/wi"
import Private from "./../../../images/Private.svg"
import more from "./../../../images/More-2.svg"

export default function About() {
  const {
    loading,
    userDataAndTweet,
    userByUsername,
    userTweetByUsername,
    isLogin,
  } = useData()
  const { user } = useParams()

  //Recovery of user data and tweets
  userDataAndTweet(user)
  const numberOfPosts = userTweetByUsername.length
  const joinedSate = new Date(userByUsername.createdAt).toLocaleDateString(
    "fr-FR",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  )

  return (
    <>
      {loading
        ? ""
        : userByUsername.name === user && (
            <div>
              <div className="profile-header">
                <Link to='/'>
                
                <WiDirectionLeft size="24" />
                </Link>
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
                <Image
                  className="profile-cover-bg"
                  src={userByUsername.profileBackground}
                />
              </div>
              <div className="profile-photo-profile-edit-button ">
                <Image
                  src={userByUsername.profilePicture}
                  className="profile-photo"
                />
                {isLogin.name === userByUsername.name ? (
                  <Button name="Edit profile" className="profile-edit-button" />
                ) : (
                  <div className="follow-more">
                    <Image src={more} className="more-button" />
                    <Button name="Follow" className="profile-edit-button" />
                  </div>
                )}
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
                <div className="flex gap-[.9rem] biography tweet-title-details">
                  <span className="flex items-center gap-[0.375em]">
                    <IoLocationOutline />
                    <span>{userByUsername.location}</span>
                  </span>
                  <span className="flex items-center gap-[0.375em]">
                    <FaRegCalendarAlt />
                    <span>{`Joined Twitter in ${joinedSate}`}</span>
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
    </>
  )
}
