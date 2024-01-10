import { NavLink, useParams } from "react-router-dom";
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
import Private from "./../images/Private.svg"
import Profile from "./../pages/profile";

export default function Sidebar() {
  const { user } = useParams();
  return (
    <>
      <div className="sidebar">
        <ul>
          <Image src={logoX} className="logoX" />
          <li>
            <Image src={logoHome} className="spaceLogoLinkName" />
            <NavLink to="/" className="active">Home</NavLink>
          </li>
          <li>
            <Image src={logoExplore} className="spaceLogoLinkName" />
            <NavLink to="" className="active">Explore</NavLink>
          </li>
          <li>
            <Image src={logoNotifications} className="spaceLogoLinkName" />
            <NavLink to="" className="active">Notifications</NavLink>
          </li>
          <li>
            <Image src={logoMessages} className="spaceLogoLinkName" />
            <NavLink to="" className="active">Messages</NavLink>
          </li>
          <li>
            <Image src={logoBookmarks} className="spaceLogoLinkName" />
            <NavLink to="" className="active">Bookmarks</NavLink>
          </li>
          <li>
            <Image src={logoLists} className="spaceLogoLinkName" />
            <NavLink to="" className="active">Lists</NavLink>
          </li>
          <li>
            <Image src={logoImage} className="spaceLogoLinkName" />
            <NavLink to={`/${user}`} className="active">Profile</NavLink>
          </li>
          <li>
            <Image src={logoMore} className="spaceLogoLinkName" />
            <NavLink to="" className="active">More</NavLink>
          </li>
          <Button name="Tweet" className="button-sidebar" />
        </ul>

        <div className=".user-setting">
          <Image className="avatar" src={Img} />
          <div className="">
            <div className=".user-setting-name">
              <span>Bradley Ortis<Image src={Private}/></span>

              <span className=" tweet-title-details">...</span>
            </div>
            <span className=" tweet-title-details">@Bradley</span>
          </div>
        </div>
      </div>
    </>
  );
}
