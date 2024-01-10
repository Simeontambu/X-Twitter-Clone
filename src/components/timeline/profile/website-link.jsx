import { LinkIcon } from "../../icon"


export default function WebsiteLink({url}){
    if(url){   
        return(
            <div className="website-link">
                <LinkIcon /> <a href="#" target="_blank">{url}</a>
            </div>
        )
    }
}