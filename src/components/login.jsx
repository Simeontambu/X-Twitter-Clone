import { useState } from "react"
import { useData } from "../hooks/useData"
import Button from "./timeline/home/button"
import TweetEditorInput from "./timeline/home/tweetEditorInput"
import { useForm } from "react-hook-form"
import Ximage from "./../images/x-image.jpg"
export default function Login() {
  const { userLogin, setIlogin, isLogin } = useData()
  const [name, setName] = useState("")
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  userLogin(name)
  function login(data) {
    setName(data.username)
    if (isLogin.name === name) {
      setIlogin(true)
      reset()
    } else {
      alert("Username not valid")
      reset()
    }
  }
  return (
    <div className="login-container flex justify-around w-full flex-wrap">
      <img src={Ximage} alt="" className="w-[40%]" />
      <div className="flex flex-col items-center justify-center md:w-1/2 lg:w-1/3">
        <h1 className="text-6xl mb-10">Happening now</h1>
        <h2 className="text-4xl mr-[235px]">Join today.</h2>
        <div className="w-[300px]  mt-10">
          <form
            className="flex flex-col justify-center"
            onSubmit={handleSubmit(login)}
          >
            <input
              type="texte"
              placeholder="Type your username"
              className="placeholder:text-center text-black rounded-[50px] p-2 outline-none"
              name="username"
              {...register("username", {
                required: "Ce champ est obligatoire",
              })}
            />
            <Button
              name="Login"
              type="submit"
              className="rounded-[50px] bg-blue-600 mt-4 p-2"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
