import React from "react";

export default function Photos (props) {
    
if (props.photos) {
    return <section>
        {props.photos.map(function(photo, index){
            return (
                <div key={index}>
                <img src={photo.src.landscape} />
                </div>
            )

        })}
    </section>;
} else {
    return null;
}
} 