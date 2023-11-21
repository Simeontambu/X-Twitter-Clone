import { BsStars } from "react-icons/bs";
export default function Header(){
    return(
        <div className="header">
            <h1 className="page-title">Home</h1>
            <span className="top-tweets"><BsStars/></span>
        </div>
    )
}