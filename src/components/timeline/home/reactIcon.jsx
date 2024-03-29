import { useState } from "react"
import React from "./../../../images/React.svg"
import { useMap } from "../../../hooks/useMap"
import { useData } from "../../../hooks/useData"

export default function ReactIcone() {
  const {
    isLiked,

    setIsLiked,
  } = useData()
  const [isHovered, setIsHovered] = useState(false)
  // the data that we use in this context this already map
  const tweets = useMap()

  const handleClick = () => {
    setIsLiked(!isLiked)
    tweets.isLiked = !tweets.isLiked

    if (tweets.isLiked) {
      tweets.favoriteCount++
    } else {
      tweets.favoriteCount--
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const iconStyle = {
    // borderRadius: "50%",
    padding: "10px",

    // background: isHovered ? "#200914" : " ",
  }

  const clickStyle = {
    color: tweets.isLiked ? "#c1035b" : isHovered ? "#c1035b" : " ",
    padding: "10px",
  }

  return (
    <div
      className="tweet-action"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={clickStyle}
    >
      <span className="">
        <span className="" style={iconStyle}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18.0317H9.98834C7.83584 17.9917 1.62501 12.38 1.62501 7.06499C1.62501 4.51166 3.72917 2.26999 6.12751 2.26999C8.03584 2.26999 9.31918 3.58666 9.99918 4.54499C10.6775 3.58832 11.9608 2.26999 13.87 2.26999C16.27 2.26999 18.3733 4.51166 18.3733 7.06582C18.3733 12.3792 12.1617 17.9908 10.0092 18.03H10V18.0317ZM6.12834 3.52082C4.39501 3.52082 2.87584 5.17749 2.87584 7.06666C2.87584 11.85 8.73751 16.73 10.0008 16.7817C11.2658 16.73 17.1258 11.8508 17.1258 7.06666C17.1258 5.17749 15.6067 3.52082 13.8733 3.52082C11.7667 3.52082 10.59 5.96749 10.58 5.99166C10.3883 6.45999 9.61668 6.45999 9.42418 5.99166C9.41251 5.96666 8.23667 3.52082 6.12917 3.52082H6.12834Z"
              fill={`${
                tweets.isLiked ? "#c1035b" : isHovered ? "#c1035b" : "#6E767D"
              }`}
            />
          </svg>
        </span>
      </span>
      <span className="" style={clickStyle}>
        {tweets.favoriteCount}
      </span>
    </div>
  )
}
