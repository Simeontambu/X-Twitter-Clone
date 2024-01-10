import { CalendarIcon } from "../../icon";

export default function YearAccountOpened({date}){
    if({date}){
        return(
            <div className="year-account-opened">
                <CalendarIcon />
                <span> Joined Twitter in {date}</span>
            </div>
        )
    }
}