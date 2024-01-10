import { NavLink,useParams } from "react-router-dom";
import Img from "./../../images/profile-photo.svg";
import Private from "./../../images/Private.svg";
import Image from "../image";
export default function UserSetting() {
  const { user } = useParams();
  const username = user || "Bradley Ortis";
  return (
    <>
      <NavLink to={`/${username}`} className="active">
        <div className="user-setting">
          <Image className="avatar" src={Img} />
          <div className="">
            <div className="user-setting-name">
              <div className="user-setting-icone">
                <span> Bradley Ortis</span>

                <Image src={Private} />
                <span className="user-setting-three-dot">...</span>
              </div>
            </div>
            <span className=" tweet-title-details">@Bradley...</span>
          </div>
        </div>
      </NavLink>
    </>
  );
}
