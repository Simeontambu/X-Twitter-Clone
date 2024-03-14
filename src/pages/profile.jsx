import { useParams } from "react-router-dom"
import ProfileName from "../components/timeline/profile/profileName"
import UserTweets from "../components/timeline/profile/userTweets"
import NavbarProfile from "../components/timeline/profile/navbarProfile"
import About from "../components/timeline/profile/about"
import { useData } from "../hooks/useData"
import TweetMedia from "../components/timeline/profile/media/tweetMedia"


export default function Profile() {

  const { filter } = useData()
  return (
    <>
      {/* className="profile-name" */}
      <main className="timeline">
        <About />
        <NavbarProfile />
        {filter !== "Medias" ? <UserTweets />: <TweetMedia/>}
      </main>
    </>
  )
}
