import Img from "./../../images/profile-photo.svg";
import Private from "./../../images/Private.svg";
import Image from "../image";
export default function UserSetting(){
    return(
        <div className="user-setting">
        <Image className="avatar" src={Img} />
        <div className="">
          <div className="user-setting-name">
            <span>
              Bradley Ortis
              <Image src={Private} />
            </span>

            <span className="user-setting-three-dot">...</span>
          </div>
          <span className=" tweet-title-details">@Bradley...</span>
        </div>
      </div>
    )
}