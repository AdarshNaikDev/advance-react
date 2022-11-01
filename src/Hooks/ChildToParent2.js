import React, { useState } from "react";
import '../App.css'

function ChildToParent2({user,displayhandler,display,dataReaderFromChild}){

    // const[display, setDisplay] = useState(false)
    // function displayhandler(){
    //     display? setDisplay(false): setDisplay(true)
    // } same function can be passed to parent
    let childvariable = "child commponent string data"

    return(
        <>
        <h2>This is a child component</h2>
        <div className="contain">
        <button onClick={displayhandler} className="btn">Click here</button>
        <hr></hr>
        <button className="btn" onClick={()=>dataReaderFromChild(childvariable)}>just click to alert</button>
        </div>
        <h2>{display? user: null}</h2>
        </>
    )

}

export default ChildToParent2;