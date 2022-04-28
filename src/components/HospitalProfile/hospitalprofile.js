import React from "react";
import "./hospitalProfile.css";
import { useState } from "react";
import { Button } from "@mui/material";
import logo from "../../Assets/patient_way-logo.png";

export default function HospitalProfile(params) {
  const [bedCount, setbedCount] = useState("");
  const [phone, setphone] = useState("");
  const [treatment, settreatment] = useState("");
  const [hospitalName, sethospitalName] = useState("");
  const [feedback, setfeedback] = useState("");
  const [gwardbcount, setgwardbcount] = useState("");
  const [icubcounbt, seticubcounbt] = useState("");
  const [cubicbcount, setcubicbcount] = useState("");

  const [Latitute, setLatitute] = useState();
  const [Longitute, setLongitute] = useState();

  const longitutehandler = (event) => {
    setLongitute(event);
    console.log(event,Longitute);
  }

  const findlocation = () => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      var crd = pos.coords;
      console.log(crd);

    }

    function errors(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            navigator.geolocation.getCurrentPosition(success, errors, options);

            setTimeout(() => {
              console.log(Longitute);
            }, 1000);

          } else if (result.state === "prompt") {
            console.log(result.state);
          } else if (result.state === "denied") {
            alert("Please enable location");
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  };


  return (
    <div className="container">
      <div className="flex-box">
        <img src={logo} alt="Logo" className="image1" />
        <form className="complaint-form">
          <div className="row-box">
            <input
              placeholder="General Ward Bedcount"
              value={gwardbcount}
              onChange={(e) => setgwardbcount(e.target.value)}
            />
            <input
              placeholder="Cubic Ward Bedcount"
              value={cubicbcount}
              onChange={(e) => setcubicbcount(e.target.value)}
            />
            <input
              placeholder="ICU Ward Bedcount"
              value={icubcounbt}
              onChange={(e) => seticubcounbt(e.target.value)}
            />
          </div>
          <div className="row-box">
            <textarea
              cols={21}
              rows={4}
              type="text"
              placeholder="Acheivements"
              value={feedback}
              onChange={(e) => setfeedback(e.target.value)}
            />

            <textarea
              cols={21}
              rows={4}
              type="text"
              placeholder="Awards"
              value={feedback}
              onChange={(e) => setfeedback(e.target.value)}
            />
          </div>
          <Button
            onClick={findlocation}
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
