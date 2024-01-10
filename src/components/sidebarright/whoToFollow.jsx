import Image from "../image";
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
                      <span>
                        {tweets[1].name} <Image src={Verified} />
                      </span>
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
                      <span>
                        {tweets[0].name} <Image src={Verified} />{" "}
                      </span>

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
                      <span>
                        {tweet.name} <Image src={Verified} />
                      </span>
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
