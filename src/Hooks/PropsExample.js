import React from "react";
import PropsCompA from "./PropsCompA";
const PropsExample = (props)=>{

    return (
        <>
           
            <h1>Name is coming from app.js (Parent) <span className="text-xl text-green-500">{props.name} </span>
              email is {props.email}</h1>
              <button onClick={props.fetchDatafn}>Click here</button>
        </>
        
    )
}

export default PropsExample