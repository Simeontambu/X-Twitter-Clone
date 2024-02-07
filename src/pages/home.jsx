import React from "react"
import Header from "../components/timeline/home/header"
import Editor from "../components/timeline/home/tweetEditor"
import Tweets from "../components/timeline/home/tweets"
import { useData } from "../hooks/useData"

function Home() {
  const {isLoading} = useData()
  return (
    <>
      <main className="timeline">
        <Header />
        <Editor />
        {isLoading && <Tweets /> }
        
      </main>
    </>
  )
}

export default Home
