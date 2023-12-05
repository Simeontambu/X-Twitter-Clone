import Image from "./../images/profile-photo.svg";
import Media from "./../images/Media.svg";
import Poll from "./../images/Poll.svg";
import Schedule from "./../images/Schedule.svg";
import Gif from "./../images/gif.svg";
import Emoji from "./../images/Group.svg";
import Profile from "./profile";
import Button from "./button";

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
            
            <Button className="button" name="Tweet" />
          </div>
        </div>
      </div>
    </>
  );
}
