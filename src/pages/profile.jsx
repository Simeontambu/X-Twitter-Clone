import { useParams } from "react-router-dom";
import ProfileName from "../components/timeline/profile/profileName";
import UserTweets from "../components/timeline/profile/userTweets";


export default function Profile() {
  const { user } = useParams();

  return (
    <>
      {/* className="profile-name" */}
      <main className="timeline">
        <ProfileName name={user} style={"profile-name"} />
        <UserTweets />
      </main>
    </>
  );
}
