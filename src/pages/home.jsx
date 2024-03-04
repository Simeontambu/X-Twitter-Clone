import React from "react"
import Header from "../components/timeline/home/header"
import Editor from "../components/timeline/home/tweetEditor"
import Tweets from "../components/timeline/home/tweets"
import { useData } from "../hooks/useData"

function Home() {
  const {isLoading} = useData()
  return (
    <>
      <main className="@apply flex-shrink-0 flex-grow-0 w-[600px] font-inter border-l border-r border-gray-700">
        <Header />
        <Editor />
        <Tweets />
        
      </main>
    </>
  )
}

export default Home
