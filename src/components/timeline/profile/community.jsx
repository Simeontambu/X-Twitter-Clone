export default function Community({numberSubscriptions, numberSubscribers}){
    return(
        <div className="community">
            <div>
                <span>{numberSubscriptions}</span> <span className="tweet-title-details">subscriptions</span>
            </div>
            <div>
                <span>{numberSubscribers}</span> <span className="tweet-title-details">subscribers</span>
            </div>
        </div> 
    )
}