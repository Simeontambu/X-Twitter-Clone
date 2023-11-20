import Image from "./../images/tweet-profile-photo.png"

export default function Tweets() {
  return (
    <>
      <div className="tweet">
       
        <img src={Image} alt="profile" />
        
        <p><span>Name</span><br /><br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
          obcaecati.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
          obcaecati.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
          obcaecati.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
          obcaecati.
        </p>
      </div>
    </>
  );
}
