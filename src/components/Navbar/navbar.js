import React from "react";
import "./Navbar.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isopen, setisopen] = useState(false);

  useEffect(() => {}, [isopen]);
  const setnav = () => {
    setisopen((isopen) => !isopen);
  };
  return (
    <div>
      <div className="desktop">
      <nav id="nav">
      <ul>
        <li>
          <a>store</a>
        </li>
        <li>
          <a>Mac</a>
        </li>
        <li>
          <a>iPad</a>
        </li>
        <li>
          <a>iPhone</a>
        </li>
        <li>
          <a>Watch</a>
        </li>
        <li>
          <a>Airpods</a>
        </li>
        <li>
          <a>Tv&Home</a>
        </li>
        <li>
          <a>only on Apple</a>
        </li>
      </ul>
    </nav>
      </div>
      <div className="mobile">
        <div className="menu" onClick={(e) => setnav()}
        style={isopen ? { height: "35px" } : {}}
        >
          <div
            className="hamburger"
            style={isopen ? { transform: "rotate(45deg)translatex(7px)" } : {}}
          ></div>
          <div
            className="hamburger2"
            style={isopen ? { transform: "rotate(-45deg)translatex(7px)" } : {}}
          ></div>
          <div
            className="hamburger1"
            style={isopen ? { transform: "translateX(300px)" } : {}}
          ></div>
        </div>
      </div>
      <div
          className="navigator"
          style={
            isopen ? {  transform: "translateX(0px)" } : {}
          }
        > </div>
        
      
    </div>
    
  );
}



