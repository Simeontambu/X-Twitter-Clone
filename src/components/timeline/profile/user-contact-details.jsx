import Location from "./location"
import WebsiteLink from "./website-link"
import YearAccountOpened from "./year-account-opened"


export default function UserContactDetails({location, websiteLink, yearJoined}){
    return(
        <div className="user-contact-details">
            <Location place={location}/>
            <WebsiteLink url={websiteLink} />
            <YearAccountOpened date={yearJoined} />
        </div>
    )
}