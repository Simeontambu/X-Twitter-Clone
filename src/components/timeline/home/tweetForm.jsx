import { useState } from "react"
import Button from "./button"
import TweetEdiorActions from "./tweetEditorActions"
import { useData } from "../../../hooks/useData"

export default function TweetForm({ ...props }) {
  const [content, setContent] = useState("")
  const { addTweet, data } = useData()
  const currentUser = data.currentUser
  const tweets = data.tweets

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTweet = {
      id: tweets.length + 1,
      name: currentUser.pseudo,
      content: content,
      comments: 0,
      retweets: 0,
      likes: 0,
      dateOrTime: `${new Date().getMinutes().toString().padStart(2, "0")}m`,
      author: currentUser.userName,
      profileUser: currentUser.profilePicture,
    }
   
    addTweet(newTweet)
    setContent("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        {...props}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="tweet-editor-buttons">
        <div className="tweet-editor-actions">
          <TweetEdiorActions />
        </div>
        <Button type="submit" className="button" name="Tweet" />
      </div>
    </form>
  )
}
