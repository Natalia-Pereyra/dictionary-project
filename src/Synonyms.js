import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div className="synonyms"> 
            <strong>Synonyms: </strong>
           {props.synonyms.map(function(synonym, index){
               return (
                  
                      
                       <em>{synonym}</em>
                  
               )
           })}
            </div>
        )
    } else {
        return null;
    }
}