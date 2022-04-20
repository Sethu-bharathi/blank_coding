import React from "react";
import Worker from "../../Assets/bg1.jpg";
import logo from "../../Assets/patient_way-logo.png";
import { useState } from "react";
import "./SignupHospital.css";

function SignupHospital() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hospitalName, sethospitalName] = useState("");
  const [phone, setphone] = useState("");

  return (
    <div className="Signupdiv">
      <img src={Worker} className="image" alt="Worker" />
      <div className="div_1">
        <img src={logo} />
        <input
          type="text"
          placeholder="Hospital Name"
          value={hospitalName}
          onChange={(e) => sethospitalName(e.target.value)}
        />
        <input
          type="Phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          autoComplete="new-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
          className="buttn"
          style={{ position: "relative", left: 0, bottom: "10px" }}
        >
          Submit
        </button>
      </div>
      <p className="quote">
      Life is a hospital in which every patient<br/> is possessed by a desire to change his bed.
      </p>
    </div>
  );
}

export default SignupHospital;
