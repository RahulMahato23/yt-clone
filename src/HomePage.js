import React, {useState,useEffect} from 'react';
import "./HomePage.css";
import Tags from "./Components/Tags";
import VideoCard from './Components/VideoCard';
import axios from 'axios';
import {toast} from "react-toastify";

function Homepage(){
    const[data,setData]=useState([]);

    useEffect(()=>{
        loadCardData();
    },[])

    const loadCardData=async()=>{
        const response=await axios.get("http://localhost:5000/Cards");
        if(response.status===200){
            setData(response.data);
        }
        else{
            toast.error("Something went wrong");
        }
    };

    console.log("data",data);

    return(
        <div className="homepage">
            <Tags/>
            {data && data.map((item,index)=>(
                <VideoCard key={index}
                {...item}
                />
            ))}
        </div>
    )
}

export default Homepage;