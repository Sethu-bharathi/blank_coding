import "./Feedback.css";
import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";

export default function Feedback(params) {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [treatment, settreatment] = useState("");
  const [hospitalName, sethospitalName] = useState("");
  const [feedback, setfeedback] = useState("");
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
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <div className="row-box">
            <input
              placeholder="Hospital Name"
              value={hospitalName}
              onChange={(e) => sethospitalName(e.target.value)}
            />
             <input
              placeholder="Treatment Name"
              value={treatment}
              onChange={(e) => settreatment(e.target.value)}
            />

            <textarea
              cols={21}
              rows={4}
              type="text"
              placeholder="Feedback"
              value={feedback}
              onChange={(e) => setfeedback(e.target.value)}
            />
          </div>
          <Button
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
