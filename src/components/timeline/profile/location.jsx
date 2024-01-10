import { LocationIcon } from "../../icon";

export default function Location({place}){
    if(place){
        return(
                <div className="location">
                    <LocationIcon /> <span>{place}</span>
                </div>
            )
    }
}