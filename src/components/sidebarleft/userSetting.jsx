import { NavLink, useParams } from "react-router-dom"
import Img from "./../../images/Profile-Photo-setting.svg"
import Private from "./../../images/Private.svg"
import Image from "../timeline/home/image"
export default function UserSetting() {
  const { user } = useParams()
  const username = user || "Bradley Ortiz"
  return (
    <>
      <NavLink to={`/${username}`} className="active">
        <div className="user-setting">
          <Image src={Img} />
          <div className="">
            <div className="user-setting-name">
              <div className="user-setting-icone">
                <span> Bradley Ortiz</span>

                <Image src={Private} />
                <span className="user-setting-three-dot">...</span>
              </div>
            </div>
            <span className=" tweet-title-details">@Bradley...</span>
          </div>
        </div>
      </NavLink>
    </>
  )
}
