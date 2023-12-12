import React from "react";
import Header from "../components/header";
import Editor from "../components/tweetEditor";
import Tweets from "../components/tweets";


function Home() {
  return (
    <>
      <main className="timeline">
        <Header />
        <Editor />
        <Tweets />
      </main>
    </>
  );
}

export default Home;
