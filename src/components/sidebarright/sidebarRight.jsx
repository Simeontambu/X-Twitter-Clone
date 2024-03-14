import Trends from "./trends"
import WhoToFollow from "./whoToFollow"
import TweetEditorInput from "./../timeline/home/tweetEditorInput"

export default function SidebarRight() {
  return (
    <div className="sidebar-right">
      <div className="sticky h-auto top-0 bg-black  ">
        <TweetEditorInput
          type="text"
          placeholder="Search Twitter"
          className="search-twitter search-icon outline-none border-none rounded-[20px] bg-opacity-90"
        />
      </div>
      <div className="">
        <Trends />
        <WhoToFollow />
      </div>
    </div>
  )
}
