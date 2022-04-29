import React from "react";
import { useState } from "react";
import "./Billing.css";
import { useRef } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

export default function Billing(params) {
  const billref = useRef(null);

  const [inputArray, setinputArray] = useState([
    { key: 1, sno: 1, treatment: null, price: null },
    { key: 2, sno: 2, treatment: null, price: null },
    { key: 3, sno: 3, treatment: null, price: null },
    { key: 4, sno: 4, treatment: null, price: null },
  ]);

  const handleChange = (i, e) => {

    let newarr = [...inputArray];
    newarr[i][e.target.name] = e.target.value;
    setinputArray(newarr);
    handleupdate();

  };
  const [totalcost, settotalcost] = useState(0);
  const handleupdate=()=>{
    var count=0;
    for (const key in inputArray) {
      var price=inputArray[key].price;
      if(price!=null){
        var p=Number(price);
        count+=p;
      }
    }
    settotalcost(count)
  }
  return (
    <div className="container1">
      <div className="leftcard">
        <div className="patientname">Name</div>

        <input className="secondinput" placeholder="Patient Name" />
        <input className="secondinput" placeholder="Patient Mobile" />
      </div>
      <div className="rightcard" ref={billref}>
        <h2 className="topic">Hospital Name</h2>
        <div className="textcard">
          <p className="first">S no</p>
          <p className="second">Treatment</p>
          <p className="third">Price</p>
        </div>

        {inputArray.map((obj, index) => (
          <div className="odd" key={obj.key}>
            <div className="textcard">
              <p className="firstinput">{obj.sno}</p>

              <input
                className="secondinput"
                placeholder="Treatment"
                value={obj.treatment || ""}
                name={"treatment"}
                onChange={(e) => handleChange(index, e)}
              />

              <input
                className="thirdinput"
                type={"text"}
                pattern={"[0-9]"}
                placeholder="Price"
                name={"price"}
                value={obj.price || ""}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
          </div>
        ))}
        <div className="totalprice">
          Total Cost  {totalcost}
        </div>

        <Button
        onClick={(e)=>window.print()}
          className="printbutton"
            variant="contained"
            disableElevation
            sx={{ backgroundColor: "#0D8394", color: "white" }}
          >
           Print
          </Button>
      </div>

      <Fab
        size="medium"
        sx={{ color: "white", backgroundColor: "#0aa3ba" }}
        className="fab"
        aria-label="add"
        onClick={() => {
          setinputArray((prev) => [
            ...prev,
            {
              key: prev.length + 1,
              sno: prev.length + 1,
              treatment: null,
              price: null,
            },
          ]);
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
