import React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "./button"
import TweetEdiorActions from "./tweetEditorActions"
import { useData } from "../../../hooks/useData"

export default function TweetForm({ ...props }) {
  const { addTweet, data } = useData()
  const currentUser = data.currentUser
  const tweets = data.tweets

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()
  const onSubmit = (data) => {
    const newTweet = {
      id: tweets.length + 1,
      name: currentUser.pseudo,
      content: data.tweet,
      comments: 0,
      retweets: 0,
      likes: 0,
      dateOrTime: `${new Date().getMinutes().toString().padStart(2, "0")}m`,
      author: currentUser.userName,
      profileUser: currentUser.profilePicture,
    }

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
