import Image from "./../images/profile-photo.png"
export default function Editor() {
  return (
    <>
    <div className="tweet-editor">
      <img className="avatar" src={Image} alt="profile" />
      <div className="tweet-editor-form">
        <input
          type="text"
          placeholder="What's happening?"
          className="tweet-editor-input"
        />
        <div className="tweet-editor-buttons">
            <div className="tweet-editor-actions">
            <span >icon</span>
            <span >icon</span>
            <span >icon</span>
            <span >icon</span>
            </div>
            <button className="button">Tweet</button>

        </div>
      </div>
      </div>
    </>
  );
}
