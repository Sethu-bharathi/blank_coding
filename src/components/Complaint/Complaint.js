import "./Complaint.css";
import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";

export default function Complaint(params) {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [complaint, setcomplaint] = useState("");
  const [hospitalName, sethospitalName] = useState("");
  const [aadhar, setaadhar] = useState("");
  const [date, setdate] = useState("");
  return (
    <div className="container">
      <div className="flex-box">
        <form className="complaint-form">
          <div className="row-box">
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              placeholder="Phone"
              value={phone}
              type={"tel"}
              pattern="[0-9]{10}"
              onChange={(e) => setphone(e.target.value)}
            />
            
            <input
              placeholder="Aadhar number"
              value={aadhar}
              onChange={(e) => setaadhar(e.target.value)}
            />
            <input
            type={"date"}
            placeholder={"Date"}
            value={date}
            onChange={(e)=>setdate(e.target.value)}/>
            
          </div>
          <div className="row-box">
            <input
              placeholder="Hospital Name"
              value={hospitalName}
              onChange={(e) => sethospitalName(e.target.value)}
            />

            <textarea
              cols={21}
              rows={4}
              type="text"
              placeholder="Complaint"
              value={complaint}
              onChange={(e) => setcomplaint(e.target.value)}
            />
            <label htmlFor="file" className="file">
              Proof if any
            </label>
            <input type={"file"} id="file" />
          </div>
          <Button
          onClick={()=>{
            console.log(name,phone,complaint,hospitalName,aadhar,date)
          }}
          className="btn"
            variant="contained"
            disableElevation
            sx={{ backgroundColor: "#0D8394", color: "white" }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
