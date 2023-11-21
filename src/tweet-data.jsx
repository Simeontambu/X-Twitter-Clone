import Image from "../src/images/tweet-image.png";
import Cnn from "./../src/images/tweet-profile-photo.png";
import logoX from "./../src/images/logo-rond-twitter.png";
import logoNewYorkTime from "./../src/images/logoNewYorkTime.png";
const tweetsData = [
  {
    name: "CNN",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    comment: 57,
    retweet: 144,
    love: 184,
    dateOrTime: "7m",
    author: "@CNN",
    profileUser: Cnn,
  },
  {
    name: "Twitter",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    Img: Image,
    comment: 19,
    retweet: 48,
    love: 482,
    dateOrTime: "Oct 29",
    author: "@twitter",
    profileUser: logoNewYorkTime,
  },
  {
    name: "Rdc",
    content: "Lorem Ipsum is simply dummy",
    comment: "6.8K",
    retweet: "36.6K",
    love: "267.1K",
    dateOrTime: "Oct 20",
    author: "@twitter",
    profileUser: logoX,
  },
  {
    name: "France24",
    content: "Lorem Ipsum is simply dummy",
    comment: "18.7K",
    retweet: "785.4K",
    love: "3.3M",
    dateOrTime: "Oct 15",
    author: "@twitter",
    profileUser: logoX,
  },
  {
    name: "Twitter",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    Img: Image,
    comment: 19,
    retweet: 48,
    love: 482,
    dateOrTime: "Oct 17",
    author: "@twitter",
    profileUser: logoX,
  },
];
export default tweetsData;
