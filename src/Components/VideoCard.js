import React from 'react';
import "./VideoCard.css"
import {MoreVert,PlaylistAdd,WatchLater} from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';
import {Link} from "react-router-dom";

function VideoCard({thumbnail,url,duration,channelName,channelLogo,title,views,time}){
    return(
        <div className="videoCard">
            <div className="watchLater"><WatchLater className="videoIcon"/></div>
            <div className="playlistAdd"><PlaylistAdd className="videoIcon"/></div>
            <a href={url}><img className="videoImg" src={thumbnail}/></a>
            <div className="duration">
                {duration}
            </div>
            <div className="videoData">
                <Avatar src={channelLogo}/>
                <div className="channelDetails">
                    <h5>{title}</h5>
                    <p className="c_name">{channelName}</p>
                    <p>{views} &bull; {time}</p>
                </div>
                <MoreVert className="moreIcon"/>
            </div>
        </div>
    )
}

export default VideoCard;