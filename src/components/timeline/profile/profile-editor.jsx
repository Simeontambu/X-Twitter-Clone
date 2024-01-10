import Username from "../../username";
import Biography from "./biography";
import Community from "./community";
import ProfileCoverImage from "./profile-cover-image";
import ProfileEditorButton from "./profile-edit-button";
import ProfileName from "./profile-name";
import ProfilePhoto from "./profile-photo";
import UserContactDetails from "./user-contact-details";

export default function ProfileEditor({coverImage, profilePhoto, pseudo, username, biography, location, websiteLink, yearJoined, numberSubscriptions, numberSubscribers}){
    return(
        <>
            <ProfileCoverImage source={coverImage} />
            <ProfilePhoto source={profilePhoto} />
            <ProfileEditorButton />
            <div className="about-profile">
                <div>
                    <ProfileName name={pseudo} />
                    <Username value={username} />
                </div>
                <Biography value={biography}/>
                <UserContactDetails location={location} websiteLink={websiteLink} yearJoined={yearJoined}/>  
                <Community numberSubscriptions={numberSubscriptions} numberSubscribers={numberSubscribers} />
            </div>
        </>
    )
}