import React from "react";
import './App.css'
import './swan.jpg'

const HtmlFunction = ()=>{
return(
    <>
    <h1>
        Hi to css
    </h1>
    <a>
        Simple anchor tag
    </a>
    <img className="imgg" src={require("./swan.jpg")}></img>
    <div className="container"> 
        
    </div>
    </>

    
)

}

export default HtmlFunction;