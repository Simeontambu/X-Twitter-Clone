import Image from "./image"
import Img from "./../../../images/topTweet.png"

export default function Header() {
  const handleTopTweetsClick = () => {
    const targetPosition = 0;
    const scrollOptions = {
      behavior: "smooth",
      duration: 500,
    };
    window.scroll(scrollOptions.behavior, targetPosition, scrollOptions.duration);
  };
  return (
    <header className="header sticky h-auto top-0 bg-black">
      <h1 className="page-title">Home</h1>

      <Image className="top-tweets" src={Img} onClick={handleTopTweetsClick}/>
    </header>
  )
}
