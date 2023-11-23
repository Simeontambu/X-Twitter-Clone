import Image from "../src/images/tweet-image.png";
import Cnn from "./../src/images/tweet-profile-photo.svg";
import logoX from "./../src/images/logo-rond-twitter.svg";
import logoNewYorkTime from "./../src/images/logoNewYorkTime.svg";
const tweetsData = [
  {
    name: "CNN",
    content:
      "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
    comment: 57,
    retweet: 144,
    love: 184,
    dateOrTime: "7m",
    author: "@CNN",
    profileUser: Cnn,
  },
  {
    name: "The New York Times",
    content:
      "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
    Img: Image,
    comment: 19,
    retweet: 48,
    love: 482,
    dateOrTime: "2h",
    author: "@nytimes",
    profileUser: logoNewYorkTime,
  },
  {
    name: "Twitter",
    content: "BIG NEWS lol jk still Twitter",
    comment: "6.8K",
    retweet: "36.6K",
    love: "267.1K",
    dateOrTime: "Oct 20",
    author: "@Twitter",
    profileUser: logoX,
  },
  {
    name: "Twitter",
    content: "hello literally everyone",
    comment: "118.7K",
    retweet: "785.4K",
    love: "3.3M",
    dateOrTime: "Oct 4",
    author: "@Twitter",
    profileUser: logoX,
  },
  {
    name: "Twitter",
    content: "Lorem Ipsum is simply dummy",
    Img: Image,
    comment: "18.7K",
    retweet: "785.4K",
    love: "3.3M",
    dateOrTime: "Oct 4",
    author: "@twitter",
    profileUser: logoX,
  },
];
export default tweetsData;
