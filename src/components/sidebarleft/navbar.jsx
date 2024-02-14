import { NavLink, useParams } from "react-router-dom"

import Image from "../timeline/home/image"
import logoHome from "./../../images/Home-Fill.svg"
import logoX from "./../../images/Twitter.svg"
import logoExplore from "./../../images/Explore.svg"
import logoNotifications from "./../../images/Notifications.svg"
import logoMore from "./../../images/More.svg"
import logoImage from "./../../images/Profile.svg"
import logoLists from "./../../images/Lists.svg"
import logoBookmarks from "./../../images/Bookmarks.svg"
import logoMessages from "./../../images/Messages.svg"
export default function Navbar() {
  const { user } = useParams()
  const username = user || "Bradley Ortiz"
  console.log(username)
  return (
    <>
      <nav>
        <ul>
          <Image src={logoX} className="logoX" />
          <li>
            <NavLink to="/" className="active">
              <Image src={logoHome} className="spaceLogoLinkName" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="active">
              <Image src={logoExplore} className="spaceLogoLinkName" />
              <span>Explore</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="active">
              <Image src={logoNotifications} className="spaceLogoLinkName" />
              <span>Notifications</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="active">
              <Image src={logoMessages} className="spaceLogoLinkName" />
              <span>Messages</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="active">
              <Image src={logoBookmarks} className="spaceLogoLinkName" />
              <span>Bookmarks</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="active">
              <Image src={logoLists} className="spaceLogoLinkName" />
              <span>Lists</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/${username}`} className="active">
              <Image src={logoImage} className="spaceLogoLinkName" />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="active">
              <Image src={logoMore} className="spaceLogoLinkName" />
              <span>More</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
