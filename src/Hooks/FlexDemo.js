import React from "react";
import "../Hooks/FlexDemo.css"

const FlexDemo = ()=>{

    return(
        <>
        <h1>Flex demo page</h1>
        <div className="parentdiv">
            <div className="child-item" style={{order:"4", alignSelf:"flex-start"}}>A</div>
            
            
            <div className="child-item" style={{order:"3", alignSelf:"flex-start"}}>B</div>

            <div className="child-item" style={{order:"1", alignSelf:"flex-end"}}>C</div>

            <div className="child-item" style={{order:"2"}}>D</div>

            <div className="child-item" style={{order:"6", alignSelf:"flex-end"}}>E</div>
            
            <div className="child-item" style={{order:"5"}}>F</div>

        </div>
        </>
    )
}

export default FlexDemo;