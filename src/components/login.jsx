import { useState } from "react"
import { useData } from "../hooks/useData"
import Button from "./timeline/home/button"
import TweetEditorInput from "./timeline/home/tweetEditorInput"
import { useForm } from "react-hook-form"

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
    <div className="w-[300px] my-4 mx-auto ">
      <h1 className="text-center pb-4">Login</h1>
      <form
        className="flex flex-col justify-center"
        onSubmit={handleSubmit(login)}
      >
        <input
          type="texte"
          placeholder="Type your username"
          className="placeholder:text-center text-black"
          value="Imogene Giles"
          name="username"
          {...register("username", {
            required: "Ce champ est obligatoire",
          })}
        />
        <Button
          name="Login"
          type="submit"
          className="rounded-md bg-blue-600 mt-4"
        />
      </form>
    </div>
  )
}
