import { useState } from "react"
import Button from "./button"
import TweetEdiorActions from "./tweetEditorActions"
import { useData } from "../../../hooks/useData"

export default function TweetForm({ ...props }) {
  const [content, setContent] = useState("")
  const { addTweet } = useData()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTweet = {
      content: content,
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
