import { NavLink, useParams } from "react-router-dom"
import Images from "./../../../images/profile-photo.svg"
import Image from "./image"
import TweetForm from "./tweetForm"

export default function Editor() {
  const { user } = useParams()
  const username = user || "Bradley Ortis"
  return (
    <>
      <div className="tweet-editor">
        <NavLink to={`/${username}`} className="active">
          <Image className="avatar" src={Images} alt="profile-image" />
        </NavLink>

        <div className="tweet-editor-form">
          <TweetForm
            placeholder="What's happening?"
            className="tweet-editor-input"
          />
        </div>
      </div>
    </>
  )
}
