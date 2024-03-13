import { NavLink } from "react-router-dom"
import Images from "./../../../images/profile-photo.svg"
import Image from "./image"
import TweetForm from "./tweetForm"
import { useData } from "../../../hooks/useData"

export default function Editor() {
  const { isLogin } = useData()
  const username = isLogin.name
  return (
    <>
      <div className="tweet-editor ">
        <NavLink to={`/${username}`} className="active">
          <Image
            className="flex-shrink-0 flex-grow-0 w-[48px] max-w-full max-h-[100px] rounded-full mt-2"
            src={isLogin.profilePicture}
            alt="profile-image"
          />
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
