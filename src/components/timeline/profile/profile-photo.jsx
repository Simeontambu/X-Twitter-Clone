export default function ProfilePhoto({source}){
    if(source){
        return(
            <div className="profile-photo" >
                 <img src={source} alt="profile photo"/>
            </div>
        )
    }
}