import { useParams } from "react-router-dom";

export default function Profile() {
  const { user } = useParams();
  return (
    <>
     

      <main className="timeline">
       
        <h2>User Profile: {user}</h2>
        {/* <AboutProfile />
            <ProfileActions /> */}
      </main>
      
    </>
  );
}
