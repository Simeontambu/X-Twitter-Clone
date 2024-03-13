import React, { useContext } from "react"
import Image from "./image"
import TweetActions from "./tweetActions"
import Verified from "./../../../images/Verified.svg"
import { Link } from "react-router-dom"
import { useMap } from "../../../hooks/useMap"

export default function Tweet() {
  const tweet = useMap()

  return (
    <>
      <div
        className=" flex justify-start items-start gap-5 py-[1.5em] px-[1rem] border-b border-gray-700"
        key={tweet.id}
      >
        <Link to={`/${tweet.authorName}`}>
          <Image
            className="flex-shrink-0 flex-grow-0 w-[48px] max-w-full max-h-[100px] rounded-full"
            src={tweet.profilePicture}
            alt="profile-image"
          />
        </Link>

        <div className="flex flex-col items-start justify-start w-[490px]">
          <div className="flex flex-col gap-[0.5rem]">
            <span className="flex justify-start items-start gap-[0.625em] text-base">
              <Link to={`/${tweet.authorName}`} className="link active">
                <span>{tweet.authorName}</span>
              </Link>
              <span>
                <Image src={Verified} />
              </span>
              <Link to={`/${tweet.authorName}`} className="link">
                <span className="text-gray-500">{tweet.authorUsername}</span>
              </Link>
              <span className="text-gray-500">{" . "}</span>
              <span className="text-gray-500">
                {tweet.formattedDate}
              </span>
            </span>

            <p className="text-[#d9d9d9] text-base">{tweet.text}</p>
            <div className="w-full">
              {tweet.media && (
                <Image
                  src={tweet.media}
                  className="w-full max-h-[250px] min-h-[250px]  rounded-[50px] border-gray-700 border-solid"
                />
              )}
            </div>
          </div>

          <TweetActions />
        </div>
      </div>
    </>
  )
}
