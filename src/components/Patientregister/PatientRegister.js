import React from "react";
import "./Patientregister.css";
import { useState } from "react";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import MedicationIcon from "@mui/icons-material/Medication";

export default function PatientRegister(params) {
  const [hospitalName, sethospitalName] = useState("");
  const [phone, setphone] = useState("");
  const [name, setname] = useState("");
  const label = { inputProps: { "aria-label": "New patient" } };
  const [isnew, setisnew] = useState(false);
  const [dob, setdob] = useState();
  const [address, setaddress] = useState();

  return (
    <div className="container">
      <div className="flex-box">
        <form className="complaint-form">
          <div className="row-box">
            <input
              placeholder="Patient's name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              placeholder="Patient's phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
            <input
              placeholder="Patient's DOB"
              type={"date"}
              value={dob}
              onChange={(e) => setdob(e.target.value)}
            />
            <textarea
              value={address}
              cols="10"
              rows="7"
              placeholder="Address"
              onChange={(e) => setaddress(e.target.value)}
            ></textarea>
            <div className="row-case">
              <Checkbox
                sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                label="New Patient"
                icon={<MedicationOutlinedIcon />}
                checkedIcon={<MedicationIcon />}
                onChange={(e) => setisnew((prev) => !prev)}
              />
              <h4 className="new">New Patient</h4>
            </div>
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
