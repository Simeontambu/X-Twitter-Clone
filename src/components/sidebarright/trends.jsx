import Image from "../timeline/home/image";
import logoSetting from "./../../images/Options.svg";

export default function Trends() {
  const trends = ["#SQUID", "#SQUID", "#SQUID", "#SQUID"];
  return (
    <div className="trends">
      <div className="Trends-for-you">
        <h3>Trends for you</h3>
        <Image src={logoSetting} className="setting" />
      </div>

      <ul>
        {trends.map((trend) => (
          <>
            <div className="Trending">
              <p className="tweet-title-details">Trending in Turkey</p>
              <p className="more">...</p>
            </div>
            <li key={trend}>{trend}</li>
            <span className="tweet-title-details">2,066 Tweets</span>
          </>
        ))}
      </ul>
      <a href="" className="show-more">
        Show more
      </a>
    </div>
  );
}
