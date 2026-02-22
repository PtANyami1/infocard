import React from "react";
import styles from "./navigationbar.module.css";

const navbar = () => {
    return (
        <>
            <div 
                className="navbar"
                id="navbar">
                <span className="title">한의사 이정재</span>
                <span className="navhistory">학력 및 이력</span>
            </div>
        </>
    );
}
export default navbar;