import Community from "./community";
import ProfileEditor from "./profile-editor";
import userData from "../../../data/user-data";

export default function AboutProfile(){
    return(
        <>
            {
                userData.map(user =>(
                    <>
                        <ProfileEditor
                        coverImage={user.sourceCoverPhoto}
                        profilePhoto={user.sourceprofilePicture}
                        pseudo={user.pseudo}
                        username={user.userName}
                        biography={user.biography}
                        location={user.location}
                        websiteLink={user.websiteLink}
                        yearJoined={user.yearJoined}
                        numberSubscriptions={user.numberSubscriptions}
                        numberSubscribers={user.numberSubscribers} 
                        />
                    </>
                ))
            }
        
        </>
    )
}