import React,{useState} from "react";
import "./Signuppage.css";
import {TextField} from "@mui/material";
import signup from "../auth/signup.js"
const SignupPage=()=>{
  const [email, setemail] = useState("");
  const [password,setpassword]=useState("");
  
  return <div className="signup">
        <div className="container">
        <TextField  id="name" label="Email" variant="standard" onChange={(e)=>setemail(e.target.value)} onPaste={(e)=>{
      e.preventDefault()
      return false;}}/>
        <br></br>
        <TextField  id="password" label="Password" variant="standard" onChange={(e)=>{setpassword(e.target.value)}}/>
        <button className="button" onClick={e=>{signup(email,password)}}>Sign up</button>
        </div>
    </div>
};


export default SignupPage;