import Image from "../home/image";
import { useData } from "../../../hooks/useData";
import { Link, useParams } from "react-router-dom";
import Button from "../home/button";
import ProfileName from "./profileName";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { WiDirectionLeft } from "react-icons/wi";
import Private from "./../../../images/Private.svg";

export default function About() {
  const { data } = useData();
  const currentUser = data.currentUser;

  const tweets = data.tweets;
  const { user } = useParams();
  const filteredTweets = tweets.filter(
    (tweet) => tweet.name === user && tweet.name != currentUser.pseudo
  );
  const numberOfPosts = filteredTweets.length;
  

  return (
    <>
      {currentUser.pseudo === user &&
         (
          <div>
            <div className="profile-header">
              <WiDirectionLeft size="24" />
              <div>
                <div className="setting-icone">
                  <ProfileName name={currentUser.pseudo} />
                  <Image src={Private} />
                </div>

                <span className="tweet-title-details">
                  <span> {`${numberOfPosts} posts`}</span>
                </span>
              </div>
            </div>

            <div className="profile-cover">
              <Image />
            </div>
            <div >
              <Image
                src={currentUser.profilePicture}
                className="profile-photo"
              />
            <Button name="Edit profile" className="profile-edit-button" />
            </div>
          
         

            <div className="about-profile">
              <div className="about-profile-icone">
                <div>
                  <div className="setting-icone">
                    <span>{currentUser.pseudo}</span>

                    <Image src={Private} />
                  </div>
                  <span className="tweet-title-details">
                    {currentUser.userName}
                  </span>
                </div>

                <span>{currentUser.biography}</span>
              </div>
              <div className="city-joined tweet-title-details">
                <span className="location setting-icone">
                  <IoLocationOutline />
                  <span>{currentUser.city}</span>
                </span>

                <span className="year-joined setting-icone">
                  {" "}
                  <FaRegCalendarAlt /> <span>{currentUser.yearJoined}</span>
                </span>
              </div>
              <div className="subscrib">
                <span className="subscriptions">
                  <span>{currentUser.numberSubscriptions}</span>

                  <span className="tweet-title-details">Subscriptions</span>
                </span>
                <span className="subscriptions">
                  <span>{currentUser.numberSubscribers}</span>
                  <span className="tweet-title-details">Subscribers</span>
                </span>
              </div>
            </div>
          </div>
        )}
      <div>
        {filteredTweets.slice(0, 1).map((tweet) => {
          return (
            <>
              <div key={tweet.id}>
                <div className="profile-header">
                  <WiDirectionLeft size="24" />
                  <div>
                    <div className="setting-icone">
                      <ProfileName name={tweet.name} />
                      <Image src={Private} />
                    </div>
                    <span className="tweet-title-details">
                      <span> {`${numberOfPosts} posts`}</span>
                    </span>
                  </div>
                </div>

                <div className="profile-cover">
                  <Image />
                </div>
                <div>
                  <Image src={tweet.profileUser} className="profile-photo" />
                </div>
                <Button name="Follow" className="profile-edit-button" />
                <div className="about-profile">
                  <div className="about-profile-icone">
                    <div>
                      <div className="setting-icone">
                        <span>{tweet.name}</span>
                        <Image src={Private} />
                      </div>
                      <span className="tweet-title-details">
                        {tweet.author}
                      </span>
                    </div>

                    <span>{tweet.biography}</span>
                  </div>

                  <div className="city-joined tweet-title-details">
                    <span className="location setting-icone">
                      <IoLocationOutline />
                      <span>{tweet.city}</span>
                    </span>
                    <span className="year-joined setting-icone">
                      <FaRegCalendarAlt />
                      <span>{tweet.yearJoined}</span>
                    </span>
                  </div>
                  <div className="subscrib">
                    <span className="subscriptions">
                      <span>{tweet.numberSubscriptions}</span>

                      <span className="tweet-title-details">Subscriptions</span>
                    </span>
                    <span className="subscriptions">
                      <span>{tweet.numberSubscribers}</span>

                      <span className="tweet-title-details">Subscribers</span>
                    </span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
