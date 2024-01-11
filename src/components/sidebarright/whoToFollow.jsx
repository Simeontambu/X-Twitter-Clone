import Image from "../timeline/home/image";
import Verified from "./../../images/Verified.svg";
import tweets from "../../utils/tweetData";

export default function WhoToFollow() {
  return (
    <div className="who-to-follow">
      <h3>Who to follow</h3>
      <ul>
        {tweets.slice(0, 3).map((tweet, index) => (
          <>
            <li key={index}>
              {index === 0 ? (
                <>
                  <Image src={tweets[1].profileUser} />
                  <div>
                    <div className="who-to-follow-name">
                      <div className="who-to-follow-icone">
                      <span>
                        {tweets[1].name}
                      </span>
                      <Image src={Verified} />
                      </div>
                      
                      <button>Follow</button>
                    </div>
                    <span className="username tweet-title-details">
                      {tweet.author}
                    </span>
                  </div>
                </>
              ) : index === 1 ? (
                <>
                  <Image src={tweets[0].profileUser} />
                  <div>
                    <div className="who-to-follow-name">
                    <div className="who-to-follow-icone">
                      <span>
                        {tweets[0].name}
                      </span>
                      <Image src={Verified} />
                      </div>

                      <button>Follow</button>
                    </div>
                    <span className="username tweet-title-details">
                      {tweet.author}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <Image src={tweet.profileUser} />
                  <div>
                    <div className="who-to-follow-name">
                    <div className="who-to-follow-icone">
                      <span>
                        {tweet.name}
                      </span>
                      <Image src={Verified} />
                      </div>
                      <button>Follow</button>
                    </div>
                    <span className="username tweet-title-details">
                      {tweet.author}
                    </span>
                  </div>
                </>
              )}
            </li>
          </>
        ))}
      </ul>
      <a href="" className="show-more">
        Show more
      </a>
    </div>
  );
}
