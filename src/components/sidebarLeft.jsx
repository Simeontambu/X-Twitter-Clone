import { NavLink } from "react-router-dom";
import Button from "./button";
import Profile from "./profile";
import logoHome from "./../images/Home-Fill.svg";
import logoX from "./../images/Twitter.svg";
import logoExplore from "./../images/Explore.svg";
import logoNotifications from "./../images/Notifications.svg";
import logoMore from "./../images/More.svg";
import logoProfile from "./../images/Profile.svg";
import logoLists from "./../images/Lists.svg";
import logoBookmarks from "./../images/Bookmarks.svg";
import logoMessages from "./../images/Messages.svg";

export default function Sidebar() {
  return (
    <>
    <div className="sidebar">

      
      <ul>
      <Profile src={logoX} className="logoX"/>
        <li>
          <Profile src={logoHome} className="spaceLogoLinkName" />
          <NavLink  to="" >Home</NavLink>
        </li>
        <li>
          <Profile src={logoExplore} className="spaceLogoLinkName" />
          <NavLink to="">Explore</NavLink>
        </li>
        <li>
          <Profile src={logoNotifications} className="spaceLogoLinkName" />
          <NavLink to="">Notifications</NavLink>
        </li>
        <li>
          <Profile src={logoMessages} className="spaceLogoLinkName" />
          <NavLink to="">Messages</NavLink>
        </li>
        <li>
          <Profile src={logoBookmarks} className="spaceLogoLinkName"/>
          <NavLink to="">Bookmarks</NavLink>
        </li>
        <li>
          <Profile src={logoLists} className="spaceLogoLinkName"/>
          <NavLink to="">Lists</NavLink>
        </li>
        <li>
          <Profile src={logoProfile} className="spaceLogoLinkName"/>
          <NavLink to="">Profile</NavLink>
        </li>
        <li>
          <Profile src={logoMore} className="spaceLogoLinkName"/>
          <NavLink to="">More</NavLink>
        </li>
        
      </ul>
      <Button name="Tweet" className="button-sidebar" />
     
    </div>
   
    </>
  );
}
