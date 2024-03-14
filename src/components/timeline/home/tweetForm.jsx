import React from "react"
import { useForm } from "react-hook-form"
import Button from "./button"
import TweetEdiorActions from "./tweetEditorActions"
import { useData } from "../../../hooks/useData"
import moment from "moment"

export default function TweetForm({ ...props }) {
  const { addTweet, data, isLogin,addTweets } = useData()
  const tweets = data.tweets

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const onSubmit = (data) => {
    const date = new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
    })
      const newTweet = {
        id: tweets.length + 1,
        author: isLogin.id,
        text: data.tweet,
        repliesCount: 0,
        retweetCount: 0,
        createdAt: date,
        favoriteCount:0,
        media: [],   
    }
    const newTweetTwo = {
      id: tweets.length + 1,
      author: isLogin.id,
      text: data.tweet,
      repliesCount: 0,
      retweetCount: 0,
      formattedDate: date,
      media: false, 
      favoriteCount:0,
      authorName:isLogin.name , 
      profilePicture:isLogin.profilePicture,
      authorUsername:isLogin.handle,
  }
  addTweets(newTweetTwo)
    addTweet(newTweet)
    reset()
  }

  const style = {
    background: "red",
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...props}
        name="tweet"
        {...register("tweet", {
          required: "Ce champ est obligatoire",
          maxLength: {
            value: 180,
            message: "Le tweet ne doit pas dépasser 180 caractères",
          },
        })}
      />
      {errors.tweet && <span style={style}>{errors.tweet?.message}</span>}
      <div className="tweet-editor-buttons">
        <div className="tweet-editor-actions">
          <TweetEdiorActions />
        </div>
        <Button type="submit" className="button" name="Tweet" />
      </div>
    </form>
  )
}
