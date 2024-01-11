import React from "react"
import Header from "../components/timeline/home/header"
import Editor from "../components/timeline/home/tweetEditor"
import Tweets from "../components/timeline/home/tweets"


function Home() {
  return (
    <>
      <main className="timeline">
        <Header />
        <Editor />
        <Tweets />
      </main>
    </>
  )
}

export default Home
