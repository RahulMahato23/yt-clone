import React,{useEffect} from 'react';
import "./Tags.css";
import {NavigateNext} from "@mui/icons-material";
 
function Tags(){
    useEffect(()=>{
        const tags=document.querySelectorAll("minitag");
        if(tags){
            tags.forEach((tag)=>{
                tag.addEventListener("click",()=>{
                    tags.forEach((tag)=> tag.classList.remove("active"));
                    if(tag){
                        tag.classList.add("active");
                    }
                });
            });
        }
    },[])
    

    return(
        <div className="tags">
            <div className="miniTag active">
                All
            </div>
            <div className="miniTag">
                Music
            </div>
            <div className="miniTag">
                BattleGround Mobile India
            </div>
            <div className="miniTag">
                Mixes
            </div>
            <div className="miniTag">
                GTA V
            </div>
            <div className="miniTag">
                World Cup 2023
            </div>
            <div className="miniTag">
                Valorant
            </div>
            <div className="miniTag">
                React JS
            </div>
            <div className="miniTag">
                Google Firebase
            </div>
            <div className="miniTag">
                Web Dev
            </div>
            <NavigateNext className="next"/>
        </div>
    )
}

export default Tags;