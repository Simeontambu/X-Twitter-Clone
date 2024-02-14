import Image from "../timeline/home/image"
import Verified from "./../../images/Verified.svg"
import { LoaderWhoToFollow } from "../loader"
import { useData } from "./../../hooks/useData"

export default function WhoToFollow() {
  const { data, tweeetPicture, newYorkTime, cnn, loading } = useData()
  const tweetdata = data.tweets
  return (
    <div className="who-to-follow">
      <h3>Who to follow</h3>
      {LoaderWhoToFollow ? (
        <LoaderWhoToFollow />
      ) : (
        <ul>
          {tweetdata.slice(0, 3).map((tweet, index) => (
            <>
              <li key={index}>
                {index === 0 ? (
                  <>
                    <Image src={newYorkTime} />
                    <div>
                      <div className="who-to-follow-name">
                        <div className="who-to-follow-icone">
                          <span>The New York Times</span>
                          <Image src={Verified} />
                        </div>

                        <button>Follow</button>
                      </div>
                      <span className="username tweet-title-details">
                        @nytimes
                      </span>
                    </div>
                  </>
                ) : index === 1 ? (
                  <>
                    <Image src={cnn} />
                    <div>
                      <div className="who-to-follow-name">
                        <div className="who-to-follow-icone">
                          <span>CNN</span>
                          <Image src={Verified} />
                        </div>

                        <button>Follow</button>
                      </div>
                      <span className="username tweet-title-details">@CNN</span>
                    </div>
                  </>
                ) : (
                  <>
                    <Image src={tweeetPicture} />
                    <div>
                      <div className="who-to-follow-name">
                        <div className="who-to-follow-icone">
                          <span>Twitter</span>
                          <Image src={Verified} />
                        </div>
                        <button>Follow</button>
                      </div>
                      <span className="username tweet-title-details">
                        @Twitter
                      </span>
                    </div>
                  </>
                )}
              </li>
            </>
          ))}
        </ul>
      )}
      <a href="" className="show-more">
        Show more
      </a>
    </div>
  )
}
