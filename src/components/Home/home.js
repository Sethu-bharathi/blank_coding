import React from "react";
import Navbar from "../Navbar/navbar";
import "./home.css";

export default function Home(){
    return <div>
        <Navbar />
        <div className="navbelow">
            <div className="text">imac24"</div>
            <div className="rowleft">
                <div>Overview</div>
                <div>Why Mac</div>
                <div>Tech Specs</div>
                <div className="btn">Buy</div>
            </div>
        </div>
        <div className="container"></div>
    </div>
}