import Navbar from "./navbar";
import UserSetting from "./userSetting";
import Button from "../button";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Navbar />
        <Button name="Tweet" className="button-sidebar" />
        <UserSetting/>
      </div>
    </>
  );
}
