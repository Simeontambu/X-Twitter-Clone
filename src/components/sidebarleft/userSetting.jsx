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
        <div className="user-setting">
          <Image
            src={isLogin.profilePicture}
            className="flex-shrink-0 flex-grow-0 w-[48px] max-w-full max-h-[100px] rounded-full"
          />
          <div className="">
            <div className="user-setting-name">
              <div className="user-setting-icone">
                <span>{isLogin.name}</span>

                <Image src={Private} />
                <span className="user-setting-three-dot">...</span>
              </div>
            </div>
            <span className=" tweet-title-details">
              {`${isLogin.handle}...`}...
            </span>
          </div>
        </div>
      </NavLink>
    </>
  )
}
