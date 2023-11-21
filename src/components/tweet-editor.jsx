import Image from "./../images/profile-photo.png";
import Profile from "./profile";
import { BsCardImage } from "react-icons/bs";
import { MdOutlineGifBox } from "react-icons/md";
import { FaSquarePollHorizontal } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import { GrSchedulePlay } from "react-icons/gr";
export default function Editor() {
  return (
    <>
      <div className="tweet-editor">
        <Profile className="avatar" src={Image} alt="profile-image" />
        <div className="tweet-editor-form">
          <input
            type="text"
            placeholder="What's happening?"
            className="tweet-editor-input"
          />
          <div className="tweet-editor-buttons">
            <div className="tweet-editor-actions">
              <span>
                <BsCardImage />
              </span>
              <span>
                <MdOutlineGifBox />
              </span>
              <span>
                <FaSquarePollHorizontal />
              </span>
              <span>
                <MdEmojiEmotions />
              </span>
              <span>
                <GrSchedulePlay />
              </span>
            </div>
            <button className="button">Tweet</button>
          </div>
        </div>
      </div>
    </>
  );
}
