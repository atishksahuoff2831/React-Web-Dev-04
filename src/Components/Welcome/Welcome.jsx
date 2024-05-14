import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Welcome.css';
const Welcome = () => {
    return (
        <>
            <div className="H1">
                <h1 className="HH1">Welcome To TrendBlendz!</h1>
            </div>
            <div className="H1">
                <Link to="/About" className="LCH">Click Here!</Link>
            </div>
        </>
    );
}
export  default Welcome;