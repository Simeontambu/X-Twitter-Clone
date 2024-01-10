import TweetEditorInput from "./../tweetEditorInput";
import Trends from "./trends";
import WhoToFollow from "./whoToFollow";

export default function SidebarRight() {
  return (
    <div className="sidebar-right">
      <div>
        <TweetEditorInput
          type="text"
          placeholder="Search Twitter"
          className="search-twitter search-icon"
        />
      </div>
      <Trends />
      <WhoToFollow />
    </div>
  );
}
