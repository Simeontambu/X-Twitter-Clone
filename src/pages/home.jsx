import React from "react";
import Header from "../components/header";
import Editor from "../components/tweet-editor";
import Tweets from "../components/tweets";
import tweetsData from "../tweet-data";

function Home() {
  return (
    <main className="timeline">
      <Header />
      <Editor />
      {tweetsData.map((tweet, index) => (
        <Tweets
          key={index}
          username={tweet.name}
          img={tweet.Img}
          comment={tweet.comment}
          retweet={tweet.retweet}
          love={tweet.love}
          author={tweet.author}
          dateOrTime={tweet.dateOrTime}
          profileUser={tweet.profileUser}
        >
          {tweet.content}
        </Tweets>
      ))}
    </main>
  );
}

export default Home;
