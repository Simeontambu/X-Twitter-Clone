import { useParams } from "react-router-dom"
import ProfileName from "../components/timeline/profile/profileName"
import UserTweets from "../components/timeline/profile/userTweets"
import NavbarProfile from "../components/timeline/profile/navbarProfile"
import About from "../components/timeline/profile/about"


export default function Profile() {


  return (
    <>
      {/* className="profile-name" */}
      <main className="timeline">
        <About />
        <NavbarProfile />
        <UserTweets />
      </main>
    </>
  )
}
