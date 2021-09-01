import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
    
    return (
        <div className="phonetic container-fluid">
            <a href={props.phonetic.audio} target="blank">
                Listen
            </a>
            <span className="text">
            {props.phonetic.text}
            </span>     
        </div>
    );
}
      