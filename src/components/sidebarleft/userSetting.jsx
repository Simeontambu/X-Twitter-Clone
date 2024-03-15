import { NavLink } from "react-router-dom"
import Img from "./../../images/Profile-Photo-setting.svg"
import Private from "./../../images/Private.svg"
import Image from "../timeline/home/image"
import { useData } from "../../hooks/useData"
export default function UserSetting() {
  const { isLogin } = useData()
  const username = isLogin.name
  return (
    <>
      <NavLink to={`/${username}`} className="active">
        <div className="flex items-center rounded-[4rem] hover:bg-[#1a1a1a] p-[0.7em]">
          <Image
            src={isLogin.profilePicture}
            className="flex-shrink-0 flex-grow-0 w-[48px] max-w-full max-h-[100px] rounded-full"
          />

          <div className="flex gap-8">
            <div>
              <div className="flex gap-1">
                <span className="">{isLogin.name}</span>
                <Image src={Private} />
              </div>
              <span className=" text-gray-500">
                {`${isLogin.handle}...`}...
              </span>
            </div>
            <span className="font-bold text-xl">...</span>
          </div>
        </div>
      </NavLink>
    </>
  )
}
