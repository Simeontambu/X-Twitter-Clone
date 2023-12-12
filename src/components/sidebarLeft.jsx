import { NavLink } from "react-router-dom";
import Button from "./button";
import Image from "./image";
import logoHome from "./../images/Home-Fill.svg";
import logoX from "./../images/Twitter.svg";
import logoExplore from "./../images/Explore.svg";
import logoNotifications from "./../images/Notifications.svg";
import logoMore from "./../images/More.svg";
import logoImage from "./../images/Profile.svg";
import logoLists from "./../images/Lists.svg";
import logoBookmarks from "./../images/Bookmarks.svg";
import logoMessages from "./../images/Messages.svg";
import Img from "./../images/profile-photo.svg";
import Profile from "./../pages/profile";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <ul>
          <Image src={logoX} className="logoX" />
          <li>
            <Image src={logoHome} className="spaceLogoLinkName" />
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <Image src={logoExplore} className="spaceLogoLinkName" />
            <NavLink to="">Explore</NavLink>
          </li>
          <li>
            <Image src={logoNotifications} className="spaceLogoLinkName" />
            <NavLink to="">Notifications</NavLink>
          </li>
          <li>
            <Image src={logoMessages} className="spaceLogoLinkName" />
            <NavLink to="">Messages</NavLink>
          </li>
          <li>
            <Image src={logoBookmarks} className="spaceLogoLinkName" />
            <NavLink to="">Bookmarks</NavLink>
          </li>
          <li>
            <Image src={logoLists} className="spaceLogoLinkName" />
            <NavLink to="">Lists</NavLink>
          </li>
          <li>
            <Image src={logoImage} className="spaceLogoLinkName" />
            <NavLink to="">Profile</NavLink>
          </li>
          <li>
            <Image src={logoMore} className="spaceLogoLinkName" />
            <NavLink to="">More</NavLink>
          </li>
          <Button name="Tweet" className="button-sidebar" />
        </ul>

        <div className="user-avatar">
          <Image className="avatar" src={Img} />
          <div className="">
            <div className="user-avatar-name">
              <span>Bradley Ortis</span>

              <span className=" tweet-title-details">...</span>
            </div>
            <span className=" tweet-title-details">@Bradley</span>
          </div>
        </div>
      </div>
    </>
  );
}
