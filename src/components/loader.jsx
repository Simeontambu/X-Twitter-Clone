import styled, { keyframes } from "styled-components"

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`

export const LoaderTweet = styled.div`
  padding: 20px;
  border: 10px solid white;
  border-bottom-color: transparent;
  border-radius: 32px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
  top: 35%; /* Center vertically relative to viewport */
  left: 46%;
  position: absolute;
`

export const LoaderWhoToFollow = styled.div`
  padding: 10px;
  border: 6px solid white;
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
  top: 90%; /* Center vertically relative to viewport */
  left: 46%;
  position: absolute;
`
