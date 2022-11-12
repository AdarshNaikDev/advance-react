import React from "react";
import { useContext } from "react";
import { dataAppjs } from "../App";
const Child2 = ()=>{

    const someDta = useContext(dataAppjs)

    return(
        <>
        <h1>
            Welcome to Child 2 
        </h1>
        <h3>
            {someDta}
        </h3>
        </>
    )

}

export default Child2;