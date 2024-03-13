import Trends from "./trends"
import WhoToFollow from "./whoToFollow"
import TweetEditorInput from "./../timeline/home/tweetEditorInput"

export default function SidebarRight() {
  return (
    <div className="sidebar-right">
      <div>
        <TweetEditorInput
          type="text"
          placeholder="Search Twitter"
          className="search-twitter search-icon outline-none border-none rounded-[20px]"
        />
      </div>
      <Trends />
      <WhoToFollow />
    </div>
  )
}
