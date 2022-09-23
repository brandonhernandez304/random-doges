import React from "react";

const Dogs = (props)=>{
    return (
        <div className="dogs">
            <img src={props.randomDog.message} alt="" />
        </div>
    )
}

export default Dogs;