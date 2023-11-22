import Image from "./../images/profile-photo.png";
import Media from "./../images/Media.svg";
import Poll from "./../images/Poll.svg";
import Schedule from "./../images/Schedule.svg";
import Gif from "./../images/gif.svg";
import Emoji from "./../images/Group.svg";
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
              <Profile src={Media} />
              <Profile src={Gif} />
              <Profile src={Poll} />
              <Profile src={Emoji} />
              <Profile src={Schedule} />
            </div>
            <button className="button">Tweet</button>
          </div>
        </div>
      </div>
    </>
  );
}
