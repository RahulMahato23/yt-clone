import React from 'react';
import Live from  "../svg/live.png";
import "./SubscriptionRow.css";

function SubscriptionRow(props){
    return(
        <div className="subscriptionRow">
            <div className="left">
                <img className="channelLogo" src={props.img}/>
                <p className="channelName">{props.name}</p>
            </div>
            <div className="right">
                <img className="liveImg" src={Live}/>
            </div>
        </div>
    )
}

export default SubscriptionRow