import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import YtLogo from "./svg/ytLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from '@mui/material/Avatar';
import Microphone from "@mui/icons-material/Mic"
import "./Header.css"

import Home from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { History,OndemandVideo,WatchLater,ThumbUp,ExpandMoreOutlined,YouTube,Theaters,SportsEsports,Settings,Flag,Help,Feedback} from "@mui/icons-material";
import SidebarRow from "./Components/SidebarRow";
import "./Sidebar.css";
import SubscriptionRow from './Components/SubscriptionRow';

function Header(){
    const toggleSidebar=()=>{
        const sidebar=document.querySelector(".sidebar");
        const MiniSidebar=document.querySelector(".mini_sidebar");
        if(sidebar){
            sidebar.classList.toggle('active');
        }
        if(MiniSidebar){
            MiniSidebar.classList.toggle('active');
        }
    }
    

    return (
        <div className="parent_header">
            <div className="header">
                <div className="header__left">
                    <div onClick={toggleSidebar}><MenuIcon/></div>
                    <img className="header__logo" src={YtLogo}/>
                </div>
                <div>
                    <a href="/AddVideoCard">Add a video card</a>
                </div>
                <div className="header_input">
                    <div className="header__middle">
                        <input className="SearchInput" placeholder="Search" type="text"/>
                        <SearchIcon className="header_searchBtn"/>
                    </div>
                    <Microphone className="header__icons"/>
                </div>
                <div className="header__right">
                    <VideoCallIcon className="header__icons"/>
                    <AppsIcon className="header__icons"/>
                    <NotificationsIcon className="header__icons"/>
                    <Avatar src="https://yt3.ggpht.com/yti/ADpuP3NdQq5jEz-Kl1hvI8yzQB4o9irJrf0BPnNHONIrKVs=s108-c-k-c0x00ffffff-no-rj"/>
                </div>
            </div>
            <div className="sidebar">
                <SidebarRow icon={Home} title="Home"/>
                <SidebarRow icon={ExploreIcon} title="Explore"/>
                <SidebarRow icon={SubscriptionIcon} title="Subscription"/>
                <hr />
                <SidebarRow icon={VideoLibraryIcon} title="Library"/>
                <SidebarRow icon={History} title="History"/>
                <SidebarRow icon={OndemandVideo} title="Your videos"/>
                <SidebarRow icon={WatchLater} title="Watch later"/>
                <SidebarRow icon={ThumbUp} title="Liked videos"/>
                <SidebarRow icon={ExpandMoreOutlined} title="Show more"/>
                <hr />
                <h4 className="sidebar_heading">SUBSCRIPTIONS</h4>
                <SubscriptionRow img="https://yt3.ggpht.com/13FpK4FfJb_I-aTMNRQTmaxLO2vjEi_NzWm1KxOzr-vjYLX7QmfHwn6XC3PfEf4Oay5WjP0CXw=s88-c-k-c0x00ffffff-no-rj" name="Nat Geo"/>
                <SubscriptionRow img="https://yt3.ggpht.com/PepK8Ve09BuwiIuRpOkPDx6DrtveKeYjysBxp9oaYSipyBLjWuFLRb-WaI8DLqfWNlpLmG9LAg=s88-c-k-c0x00ffffff-no-rj" name="Harsh Rajput"/>
                <SubscriptionRow img="https://yt3.ggpht.com/ytc/APkrFKazE1t8ivXQCwXnc0i-hVbk1ef5C16MdBtvjoGu=s88-c-k-c0x00ffffff-no-rj" name="MYD"/>
                <SubscriptionRow img="https://yt3.ggpht.com/rF0r69Mg0baVSAouscioJRmx-m0RHgOTWkwVv8ZxNBsf3lnFLrEC62oTvIceuIcOiDsunxd37A=s88-c-k-c0x00ffffff-no-rj" name="GGI"/>
                <SubscriptionRow img="https://yt3.ggpht.com/ytc/APkrFKbNFNfzY7OW-xvMAyW-tHFfY7kpNukM9YgiXnWwlA=s88-c-k-c0x00ffffff-no-rj" name="The7kMaster"/>
                <SidebarRow icon={ExpandMoreOutlined} title="Show more"/>
                <hr/>
                <h4 className="sidebar_heading">MORE ON YOUTUBE</h4>
                <SidebarRow icon={YouTube} title="Youtube premium"/>
                <SidebarRow icon={Theaters} title="Movie"/>
                <SidebarRow icon={SportsEsports} title="Gaming"/>
                <hr/>
                <SidebarRow icon={Settings} title="Settings"/>
                <SidebarRow icon={Flag} title="Report history"/>
                <SidebarRow icon={Help} title="Help"/>
                <SidebarRow icon={Feedback} title="Send Feedback"/>
                <hr></hr>
                <div className="footer">
                    <p>About &nbsp; Press &nbsp; Copyright</p>
                    <p>Contact us &nbsp; Creators</p>
                    <p>Advertise &nbsp; Developers</p>
                    <br/>
                    <p>Terms &nbsp; Privacy &nbsp; Policy & Safety</p>
                    <p>How youtube works</p>
                    <p>Test new features</p>
                    <br/>
                    <p style={{color:"rgb(142,142,142)"}}>&#169; 2023 Google LLC</p>
                </div>
            </div>
            <div className="mini_sidebar">
                <div className="miniDiv">
                    <Home/>
                    <p>Home</p>
                </div>
                <div className="miniDiv">
                    <ExploreIcon/>
                    <p>Explore</p>
                </div>
                <div className="miniDiv">
                    <SubscriptionIcon/>
                    <p>Subscription</p>
                </div>
                <div className="miniDiv">
                    <VideoLibraryIcon/>
                    <p>Library</p>
                </div>
            </div>
        </div>
    )
}

export default Header