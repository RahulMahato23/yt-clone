import React, {useState} from 'react';
import {MDBValidation,MDBInput,MDBBtn, MDBValidationItem} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {toast} from "react-toastify";

const initialState ={
  thumbnail:"",
  url:"",
  duration:"",
  channelName:"",
  channelLogo:"",
  title:"",
  views:"",
  time:""
}

const AddVideoCard = () => {
  const [formValue, setFormValue]=useState(initialState);
  const {thumbnail,url,duration,channelName,channelLogo,title,views,time}=formValue;

  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if (thumbnail && url && duration && channelName && channelLogo && title && views && time){
      const updatedCardData={...formValue};
      const response=await axios.post("http://localhost:5000/Cards", updatedCardData);
      if (response.status===201){
        toast.success("Card created successfully");
      }
      else{
        toast.error("Something went wrong");
      }
      setFormValue({thumbnail:"", url:"", duration:"", channelName:"", channelLogo:"", title:"", views:"", time:""});
      navigate("/");
    }
  };

  const onInputChange = (e) => {
    let { name,value }= e.target;
    setFormValue({...formValue, [name]:value});
  };

  return (
    <MDBValidation className="row g-3" style={{marginTop:"100px"}} noValidate onSubmit={handleSubmit}>
      <p className="fs-2 fw-bold">Add Video Card</p>
      <div style={{ margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"}}>
          <MDBValidationItem feedback="Please provide thumbnail link" invalid>
          <MDBInput
            value={thumbnail || ""}
            name="thumbnail"
            type="text"
            onChange={onInputChange}
            required
            label="Thumbnail Link"/>
          </MDBValidationItem>
           <br/>
           <MDBValidationItem feedback="Please provide video url" invalid>
            <MDBInput
            value={url || ""}
            name="url"
            type="text"
            onChange={onInputChange}
            required
            label="Video URL"/>
           </MDBValidationItem>
           <br/>
           <MDBValidationItem feedback="Please provide video duration" invalid>
            <MDBInput
            value={duration || ""}
            name="duration"
            type="text"
            onChange={onInputChange}
            required
            label="Video Duration"/>
           </MDBValidationItem>
           <br/>
           <MDBValidationItem feedback="Please provide channel name" invalid>
            <MDBInput
            value={channelName || ""}
            name="channelName"
            type="text"
            onChange={onInputChange}
            required
            label="Channel Name"/>
           </MDBValidationItem>
           <br/>
           <MDBValidationItem feedback="Please provide channel logo link" invalid>
            <MDBInput
            value={channelLogo || ""}
            name="channelLogo"
            type="text"
            onChange={onInputChange}
            required
            label="Channel Logo Link"/>
           </MDBValidationItem>
           <br/>
           <MDBValidationItem feedback="Please provide video title" invalid>
            <MDBInput
            value={title || ""}
            name="title"
            type="text"
            onChange={onInputChange}
            required
            label="Video Title"/>
           </MDBValidationItem>
           <br/>
           <MDBValidationItem feedback="Please provide no of views" invalid>
            <MDBInput
            value={views || ""}
            name="views"
            type="text"
            onChange={onInputChange}
            required
            label="Views"/>
           </MDBValidationItem>
           <br/>
           <MDBValidationItem feedback="Please provide timelapsed since the release" invalid>
           <MDBInput
           value={time || ""}
           name="time"
           type="text"
           onChange={onInputChange}
           required
           label="Time"/>
           </MDBValidationItem>
           <br/>
           <br/>
           <MDBBtn type="submit" style={{marginRight:"10px"}}>Add</MDBBtn>
           <MDBBtn color="danger" style={{marginRight:"10px"}} onClick={()=>navigate("/")}>Go Back</MDBBtn>
      </div>
    </MDBValidation>
  )
}

export default AddVideoCard;
