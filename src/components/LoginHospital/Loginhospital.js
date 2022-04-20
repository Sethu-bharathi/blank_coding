import React from "react";
import Worker from "../../Assets/bg1.jpg";
import logo from "../../Assets/patient_way-logo.png";
import { useState } from "react";
import "./loginHospital.css";

function LoginHospital() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="Logindiv">
      <img src={Worker} className="image" alt="Worker" />
      <div className="div_2">
        <img src={logo} />
        <h1 style={{ margin: "0 0 20px 0" }}>Patient Way</h1>
        <h3 style={{ margin: "0 0 40px 0" }}>Login to a new Care</h3>
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
        {/* <img className="coffee" src={Coffee} alt="Worker" /> */}
      </div>
      <p className="quote">
      Life is a hospital in which every patient<br/> is possessed by a desire to change his bed.
      </p>
    </div>
  );
}

export default LoginHospital;
